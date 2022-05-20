const BASE_URL = "https://restcountries.com/v2/";

export const ALL_COUNTRIES =
  BASE_URL + "all?fields=name,capital,flags,population,region";

export const searchByCountry = (name: string): string =>
  BASE_URL + "name/" + name;

// [ ] codes type?
export const filterByCode = (codes: any): string =>
  BASE_URL + "alpha?codes=" + codes.join(",");

// interface IApi {
//   BASE_URL: string;
//   ALL_COUNTRIES: string;
//   searchByCountry: (name: string) => string;
//   filterByCode: (codes: any) => string;
// }
