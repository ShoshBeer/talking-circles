import { createSlice } from "@reduxjs/toolkit";

const settings = createSlice({
  name: 'settings',
  initialState: {
    wordDifficulty: '',
    includeEasy: true,
    includeMed: true,
    includeHard: true,
    numOfRestrictedWords: 5,
    language: 'en'
  },
  reducers: {
    'toggleEasy': (state) => {
      state.includeEasy = !state.includeEasy;
    },

    'toggleMed': (state) => {
      state.includeMed = !state.includeMed;
    },

    'toggleHard': (state) => {
      state.includeHard = !state.includeHard;
    },

    'setWordDifficulty': (state, action) => {
      state.wordDifficulty = action.payload;
    },

    'changeNumOfRestrictedWords': (state, action) => {
      state.numOfRestrictedWords = action.payload;
    },

    'changeLanguage': (state, action) => {
      state.language = action.payload;
    }
  }
});

export const toggleEasy = settings.actions.toggleEasy;
export const toggleMed = settings.actions.toggleMed;
export const toggleHard = settings.actions.toggleHard;
export const changeNumOfRestrictedWords = settings.actions.changeNumOfRestrictedWords;
export const setWordDifficulty = settings.actions.setWordDifficulty;
export const changeLanguage = settings.actions.changeLanguage;
export const selectWordDifficulty = state => state.settings.wordDifficulty;
export const selectIncludeEasy = state => state.settings.includeEasy;
export const selectIncludeMed = state => state.settings.includeMed;
export const selectIncludeHard = state => state.settings.includeHard;
export const selectNumOfRestrictedWords = state => state.settings.numOfRestrictedWords;
export const selectLanguage = state => state.settings.language;
export const settingsReducer = settings.reducer;