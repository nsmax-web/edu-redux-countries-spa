import { eTheme } from "./../../styles/theme";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: eTheme.dark,
  reducers: {
    setTheme: (state: eTheme, action: PayloadAction<eTheme>) => {
      state = action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;

export const { setTheme } = themeSlice.actions;
