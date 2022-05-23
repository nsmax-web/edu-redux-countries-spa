import { useNavigate } from "react-router-dom";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  // selectAllCountries,
  selectCountriesInfo,
  selectVisibleCountries,
} from "../store/countries/selectors";
import { useEffect } from "react";
import { loadCountries } from "../store/countries/actions";
import { Status } from "../store/countries";
// import { selectSearch } from "../store/controls/selectors";

export const HomePage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectVisibleCountries);
  const { status, error, qty } = useAppSelector(selectCountriesInfo);
  // const search = useAppSelector(selectSearch);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return (
    <>
      <Controls />
      {error && <h2>Cant fetch data</h2>}
      {status === Status.loading && <h2>Loading...</h2>}
      {status === Status.received && (
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
      )}
    </>
  );
};
