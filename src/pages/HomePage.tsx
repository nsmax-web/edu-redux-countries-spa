import { useNavigate } from "react-router-dom";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectAllCountries,
  selectCountriesInfo,
} from "../store/countries/selectors";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadCountries } from "../store/countries/actions";

export const HomePage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectAllCountries);
  const { status, error, qty } = useAppSelector(selectCountriesInfo);

  useEffect(() => {
    dispatch(loadCountries());
  }, []);

  return (
    <>
      <Controls />

      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              key={c.name}
              onClick={() => navigate(`/country/${c.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};
