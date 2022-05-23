import { eTheme } from "./../../styles/theme";
import { createAction, createSlice } from "@reduxjs/toolkit";

export const setTheme = createAction<eTheme>("theme/set");

const themeSlice = createSlice({
  name: "theme",
  initialState: eTheme.dark,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(setTheme, (state, action) => (state = action.payload)),
});

export const themeReducer = themeSlice.reducer;
