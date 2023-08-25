import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountryData = createAsyncThunk('countries/fetchCountryData', async () => {
  try {
    const response = await fetch('https://restcountries.com/v3/all');
    return response.json();
  } catch (error) {
    throw new Error('Unable to fetch country data');
  }
});

const initialState = {
  countries: [],
  selectedCountry: null,
  loading: 'idle',
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryData.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchCountryData.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.countries = action.payload;
      })
      .addCase(fetchCountryData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCountry } = countriesSlice.actions;
export const countriesReducer = countriesSlice.reducer;
export default countriesSlice.reducer;
