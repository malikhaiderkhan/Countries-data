import React from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import './CountryDetails.css';

function CountryDetails() {
  const selectedCountry = useSelector((state) => state.countries.selectedCountry);

  if (!selectedCountry) {
    return <p>Select a country to see details.</p>;
  }

  const landlockedText = selectedCountry.landlocked ? 'Yes' : 'No';

  return (
    <div className="country-details">
      <img className="country-flag" src={selectedCountry.flags[1]} alt={selectedCountry.name.common} />
      <p className="country-detail">
        <b>Name</b>
        {': '}
        {selectedCountry.name.common}
      </p>
      <p className="country-detail">
        <b>Population</b>
        {': '}
        {selectedCountry.population}
      </p>
      <p className="country-detail">
        <b>Capital</b>
        {': '}
        {selectedCountry.capital}
      </p>
      <p className="country-detail">
        <b>Region</b>
        {': '}
        {selectedCountry.region}
      </p>
      <p className="country-detail">
        <b>Subregion</b>
        {': '}
        {selectedCountry.subregion}
      </p>
      <p className="country-detail">
        <b>Demonym</b>
        {': '}
        {selectedCountry.demonyms.eng.m}
      </p>
      <p className="country-detail">
        <b>Landlocked</b>
        {': '}
        {landlockedText}
      </p>
      <p className="country-detail">
        <b>Area</b>
        {': '}
        {selectedCountry.area}
      </p>
      <p className="country-detail">
        <b>Continent</b>
        {': '}
        {selectedCountry.continents}
      </p>
    </div>
  );
}

export default CountryDetails;
