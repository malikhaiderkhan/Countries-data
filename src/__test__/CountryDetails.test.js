import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import CountryDetails from '../components/CountryDetails';

const mockStore = configureMockStore();
const store = mockStore({
  countries: {
    selectedCountry: {
      flags: ['flag-url'],
      name: { common: 'Selected Country' },
      population: 100,
      capital: 'Capital City',
      region: 'Region',
      subregion: 'Subregion',
      demonyms: { eng: { m: 'Demonym' } },
      landlocked: true,
      area: 1000,
      continents: 'Continent',
    },
  },
});

test('CountryDetails renders correctly', () => {
  const { getByText, getByAltText } = render(
    <Provider store={store}>
      <CountryDetails />
    </Provider>
  );

  expect(getByText('Selected Country')).toBeInTheDocument();
  expect(getByAltText('Selected Country')).toBeInTheDocument();
});
