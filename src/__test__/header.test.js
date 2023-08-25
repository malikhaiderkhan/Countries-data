import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Header from '../components/header';

const mockStore = configureMockStore();
const store = mockStore({
  countries: {
    selectedCountry: {
      name: { common: 'Selected Country' },
    },
  },
});

test('Header renders correctly with selected country', () => {
  const { getByText, getByAltText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  expect(getByText('Selected Country')).toBeInTheDocument();
  expect(getByAltText('Mic Icon')).toBeInTheDocument();
  expect(getByAltText('Settings Icon')).toBeInTheDocument();
});

test('Header renders correctly without selected country', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  expect(getByText('Population Data')).toBeInTheDocument();
  expect(getByText('<')).toBeInTheDocument();
});
