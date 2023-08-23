import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountryData } from '../redux/countries/countriesSlice';
import './CountryList.css';

function CountryList() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.loading);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);

  useEffect(() => {
    const filtered = countries.filter((country) => country.name.common.toLowerCase()
      .includes(searchQuery.toLowerCase()));
    setFilteredCountries(filtered);
  }, [countries, searchQuery]);

  return (
    <div>
      <h2>Country Population</h2>
      <div className="country-search">
        <input
          type="text"
          placeholder="Search country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {loading === 'pending' && <p>Loading...</p>}
      <div className="country-grid">
        {filteredCountries.map((country) => (
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
