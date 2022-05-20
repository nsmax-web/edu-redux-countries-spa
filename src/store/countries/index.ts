import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountry, loadCountries } from "./actions";

enum Status {
  idle = "idle",
  received = "received",
  loading = "loading",
  rejected = "rejected",
}

// export const countriesReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(setCountries, (state, action) => {
// state.status = Status.received;
// state.error = null;
// state.list = action.payload;
//     })
//     .addCase(setLoading, (state) => {
//       state.status = Status.loading;
//       state.error = null;
//     })
//     .addCase(setError, (state, action) => {
//       state.status = Status.rejected;
//       state.error = action.payload;
//     });
// });
const initialState = {
  status: "idle" as Status,
  error: null as null | string,
  list: [] as ICountry[],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (
      state: typeof initialState,
      action: PayloadAction<ICountry[]>
    ) => {
      state.status = Status.received;
      state.error = null;
      state.list = action.payload;
    },
    setLoading: (state: typeof initialState) => {
      state.status = Status.loading;
      state.error = null;
    },
    setError: (state: typeof initialState, action: PayloadAction<string>) => {
      state.status = Status.rejected;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCountries.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = Status.received;
    });
  },
});

export const countriesReducer = countriesSlice.reducer;

export const { setCountries, setError, setLoading } = countriesSlice.actions;
