import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import CountryList from '../components/CountryList';

const mockStore = configureMockStore();
const store = mockStore({
  countries: {
    countries: [
      { cca3: 'AAA', name: { common: 'Country 1' }, population: 100 },
      { cca3: 'BBB', name: { common: 'Country 2' }, population: 200 },
    ],
    loading: 'fulfilled',
  },
});

test('CountryList renders correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <CountryList />
    </Provider>
  );

  expect(getByText('Country 1')).toBeInTheDocument();
  expect(getByText('Country 2')).toBeInTheDocument();
  expect(getByText('Population: 100')).toBeInTheDocument();
  expect(getByText('Population: 200')).toBeInTheDocument();
});
