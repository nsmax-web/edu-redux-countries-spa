import { themeReducer } from "./theme/index";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// FIXME: remove axios and types
import axios from "axios";
// FIXME: remove redux-thunk and types
import thunk from "redux-thunk";

import * as api from "../config";

export const store = configureStore({
  reducer: { theme: themeReducer },
  middleware: [thunk.withExtraArgument({ client: axios, api })],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
