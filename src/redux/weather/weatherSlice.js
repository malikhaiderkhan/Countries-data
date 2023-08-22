import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const API_KEY = '41cd94568039c0bd5856e5864fd6b598';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41cd94568039c0bd5856e5864fd6b598`);
  return response.data;
});

const initialState = {
  data: null,
  loading: 'idle',
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error;
      });
  },
});

export const weatherReducer = weatherSlice.reducer;
export default weatherSlice.reducer;
