import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountryData } from '../redux/countries/countriesSlice';
import './CountryList.css';

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
      <div className="country-grid">
        {countries.map((country) => (
          <div key={country.cca3} className="country-box">
            <Link to={`/country/${country.cca3}`} className="country-button">
              <img src={country.flags[1]} alt={country.name.common} />
              <h3>{country.name.common}</h3>
              <p>
                Population:
                {country.population}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
