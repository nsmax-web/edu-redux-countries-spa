import { eTheme } from "./../../styles/theme";
import { createAction } from "@reduxjs/toolkit";

export const setTheme = createAction<eTheme>("theme/set");
