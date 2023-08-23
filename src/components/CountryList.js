import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountryData } from '../redux/countries/countriesSlice';

function CountryList() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.loading);

  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);

  return (
    <div>
      <h2>Country List</h2>
      {loading === 'pending' && <p>Loading...</p>}
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            <Link to={`/country/${country.cca3}`} className="country-button">
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
