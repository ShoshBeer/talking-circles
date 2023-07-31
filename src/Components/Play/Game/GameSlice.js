import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
  name: 'game',
  initialState: {
    targetWord: {},
    relatedWords: [],
    pass: [],
    fail: []
  },
  reducers: {
    newTargetWord: (state, action) => {
      state.targetWord = action.payload
    },

    addPass: (state, action) => {
      state.pass = [...state.pass, action.payload]
    },

    addFail: (state, action) => {
      state.fail = [...state.fail, action.payload]
    },

    addRelatedWords: (state, action) => {
      state.relatedWords = [action.payload]
    },

    clearScore: (state) => {
      state.pass = []
      state.fail = []
    }
  }
})

export const addPass = game.actions.addPass
export const addFail = game.actions.addFail
export const newTargetWord = game.actions.newTargetWord
export const addRelatedWords = game.actions.addRelatedWords
export const clearScore = game.actions.clearScore
export const selectTargetWord = state => state.game.targetWord
export const selectRelatedWords = state => state.game.relatedWords
export const selectPass = state => state.game.pass
export const selectFail = state => state.game.fail
export const gameReducer = game.reducer
