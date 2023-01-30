import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./Components/Game/GameSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer
  }
})