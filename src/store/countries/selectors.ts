import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ICountry } from "./actions";

const select = (state: RootState) => state.countries;
const search = (state: RootState): string => state.controls.search;

export const selectCountriesInfo = createDraftSafeSelector(select, (state) => ({
  status: state.status,
  error: state.error,
  qty: state.list.length,
}));

export const selectAllCountries = createDraftSafeSelector(
  select,
  (state): ICountry[] => state.list
);

export const selectVisibleCountries = createDraftSafeSelector(
  [select, search],
  (countryes, search) => {
    if (search !== "") {
      return countryes.list.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return countryes.list;
  }
);
