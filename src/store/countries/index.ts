import { createSlice } from "@reduxjs/toolkit";
import { ICountry, loadCountries } from "./actions";

export enum Status {
  idle = "idle",
  received = "received",
  loading = "loading",
  rejected = "rejected",
}

const initialState = {
  status: "idle" as Status,
  error: undefined as string | undefined,
  list: [] as ICountry[],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = Status.received;
      })
      .addCase(loadCountries.pending, (state) => {
        state.status = Status.loading;
        state.error = undefined;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = Status.rejected;
        state.error = action.payload;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;
