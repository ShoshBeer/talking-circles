import { configureStore } from '@reduxjs/toolkit'
import { settingsReducer } from '../Components/Controls/ControlSlice'
import { gameReducer } from '../Components/Game/GameSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    settings: settingsReducer
  }
})
