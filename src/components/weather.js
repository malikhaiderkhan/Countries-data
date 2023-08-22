import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/weather/weatherSlice';

function Weather() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const loading = useSelector((state) => state.weather.loading);

  const [city, setCity] = useState('');

  const handleSearch = () => {
    dispatch(fetchWeather(city));
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button type="button" onClick={handleSearch}>Search</button>

      {loading === 'pending' && <p>Loading...</p>}
      {weatherData && (
        <div>
          <h2>
            {weatherData.name}
            ,
            {' '}
            {weatherData.sys.country}
          </h2>
          <p>
            Temperature:
            {weatherData.main.temp}
            °C
          </p>
          <p>
            Weather:
            {weatherData.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
