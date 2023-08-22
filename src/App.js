import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList />
        <CountryDetails />
      </div>
    </Provider>
  );
}

export default App;
