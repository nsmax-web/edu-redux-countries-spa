import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const select = (state: RootState) => state.controls;
export const selectSearch = createDraftSafeSelector(
  select,
  (state) => state.search
);
