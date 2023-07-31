import { configureStore } from '@reduxjs/toolkit'
import { settingsReducer } from '../Components/Settings/ControlSlice'
import { gameReducer } from '../Components/Play/Game/GameSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    settings: settingsReducer
  }
})
