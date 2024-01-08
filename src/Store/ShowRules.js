import { createSlice } from "@reduxjs/toolkit";

const ShowRules = createSlice({
  name: "Show Rules",
  initialState: {
    value: false,
  },
  reducers: {
    toggleShowRules(state) {
      state.value = !state.value;
    },
  },
});

export const { toggleShowRules } = ShowRules.actions;
export default ShowRules.reducer;
