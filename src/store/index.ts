import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// FIXME: remove axios and types
import axios from "axios";

import * as api from "../config";
import { controlsReducer } from "./controls";
import { countriesReducer } from "./countries";
import { themeReducer } from "./theme/index";

export type IApi = typeof api;

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
