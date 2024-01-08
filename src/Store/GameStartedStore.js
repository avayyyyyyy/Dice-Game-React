import { createSlice } from "@reduxjs/toolkit";

const GameStarted = createSlice({
  name: "isGameStarted",
  initialState: {
    value: false,
  },
  reducers: {
    toggleGame(state) {
      state.value = !state.value;
    },
  },
});

export const { toggleGame } = GameStarted.actions;
export default GameStarted.reducer;
