import React from 'react';
import { useSelector } from 'react-redux';
import './CountryDetails.css';

function CountryDetails() {
  const selectedCountry = useSelector((state) => state.countries.selectedCountry);

  if (!selectedCountry) {
    return <p>Select a country to see details.</p>;
  }

  const landlockedText = selectedCountry.landlocked ? 'Yes' : 'No';

  return (
    <div className="country-details">
      <img src={selectedCountry.flags[1]} alt={selectedCountry.name.common} />
      <p className="country-detail">
        Name:
        {selectedCountry.name.common}
      </p>
      <p className="country-detail">
        Population:
        {' '}
        {selectedCountry.population}
      </p>
      <p className="country-detail">
        Capital:
        {' '}
        {selectedCountry.capital}
      </p>
      <p className="country-detail">
        Region:
        {' '}
        {selectedCountry.region}
      </p>
      <p className="country-detail">
        Subregion:
        {' '}
        {selectedCountry.subregion}
      </p>
      <p className="country-detail">
        Demonym:
        {' '}
        {selectedCountry.demonyms.eng.m}
      </p>
      <p className="country-detail">
        Landlocked:
        {' '}
        {landlockedText}
      </p>
      <p className="country-detail">
        Area:
        {' '}
        {selectedCountry.area}
      </p>
      <p className="country-detail">
        Continent:
        {' '}
        {selectedCountry.continents}
      </p>
    </div>
  );
}

export default CountryDetails;
