import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWordList = createAsyncThunk(
  'game/fetchWordList',
  async (numOfWords = 10, { getState }) => {
    const state = getState();
    const targetWord = state.game.targetWord.LEMMA;
    const responseSyn = await fetch(`https://api.datamuse.com/words?rel_syn=${targetWord}&max=${numOfWords}&md=fd&qe=rel_syn`);
    const responseTrg = await fetch(`https://api.datamuse.com/words?rel_trg=${targetWord}&max=${numOfWords}&md=fd`);
    const synonyms = await responseSyn.json();
    const triggerWords = await responseTrg.json();
    const listOfWords = synonyms.concat(triggerWords);
    return listOfWords.filter((word, index) =>  index === 0 || !word.word.toLowerCase().includes(targetWord.toLowerCase())); //filter related words that contain the target word
  }
)

const game = createSlice({
  name: 'game',
  initialState: {
    targetWord: {LEMMA: 'example'},
    currentCard: [],
    isLoading: false,
    failedToLoad: false,
    pass: [],
    fail: []
  },
  reducers: {
    'newTargetWord': (state, action) => {
      state.targetWord = action.payload;
    },

    'addPass': (state, action) => {
      state.pass = [...state.pass, action.payload];
    },

    'addFail': (state, action) => {
      state.fail = [...state.fail, action.payload];
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchWordList.pending, (state) => {
          state.isLoading = true;
          state.failedToLoad = false;
        })
        .addCase(fetchWordList.fulfilled, (state, action) => {
          state.isLoading = false;
          state.failedToLoad = false;
          state.currentCard = action.payload;
        })
        .addCase(fetchWordList.rejected, (state) => {
          state.isLoading = false;
          state.failedToLoad = true;
        })
  }
});

export const addPass = game.actions.addPass;
export const addFail = game.actions.addFail;
export const newTargetWord = game.actions.newTargetWord;
export const selectTargetWord = state => state.game.targetWord;
export const selectCurrentCard = state => state.game.currentCard;
export const selectPass = state => state.game.pass;
export const selectFail = state => state.game.fail;
export const gameReducer = game.reducer;