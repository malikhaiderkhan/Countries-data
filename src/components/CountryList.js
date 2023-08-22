import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryData, setSelectedCountry } from '../redux/countries/countriesSlice';

function CountryList() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.loading);

  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);

  const handleCountryClick = (country) => {
    dispatch(setSelectedCountry(country));
  };

  return (
    <div>
      <h2>Country List</h2>
      {loading === 'pending' && <p>Loading...</p>}
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            <button
              type="button"
              onClick={() => handleCountryClick(country)}
              className="country-button"
            >
              {country.name.common}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
