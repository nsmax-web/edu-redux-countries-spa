import { setSearch } from "./actions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  region: "",
};

const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setSearch, (state, action) => {
      state.search = action.payload;
    });
  },
});

export const controlsReducer = controlsSlice.reducer;
