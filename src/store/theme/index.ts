import { setTheme } from "./actions";
import { eTheme } from "./../../styles/theme";
import { createReducer } from "@reduxjs/toolkit";

// FIXME: createSlice
export const themeReducer = createReducer(eTheme.dark, (builder) => {
  builder.addCase(setTheme, (state, action) => action.payload);
});
