import React from 'react';
import { useSelector } from 'react-redux';

function CountryDetails() {
  const selectedCountry = useSelector((state) => state.countries.selectedCountry);
  console.log(selectedCountry);

  if (!selectedCountry) {
    return <p>Select a country to see details.</p>;
  }

  return (
    <div>
      <h2>{selectedCountry.name.common}</h2>
      <p>
        Population:
        {selectedCountry.population}
      </p>
      <p>
        Region:
        {selectedCountry.region}
      </p>
      <p>
        Subregion:
        {selectedCountry.subregion}
      </p>
    </div>
  );
}

export default CountryDetails;
