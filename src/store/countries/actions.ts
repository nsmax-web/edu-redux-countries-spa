import { AxiosStatic } from "axios";
import { IApi } from "./../index";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface ICountry {
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
  independent: boolean;
  name: string;
  population: number;
  region: string;
}

export const setCountries = createAction<ICountry[]>("countries/set");
export const setLoading = createAction("countries/loading");
export const setError = createAction<string>("countries/error");

export const loadCountries = createAsyncThunk<
  ICountry[],
  undefined,
  { extra: { client: AxiosStatic; api: IApi }; rejectValue: string }
>("countries/load", async (_, { extra: { client, api }, rejectWithValue }) => {
  const data = await client
    .get(api.ALL_COUNTRIES)
    .then(({ data }) => data)
    .catch((err) => rejectWithValue(err.message));
  return data;
});
