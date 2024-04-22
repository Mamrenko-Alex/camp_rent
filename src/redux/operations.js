import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://661b793965444945d04f8dcc.mockapi.io/v1';

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = advert => {
  return {
    type: ADD_TO_FAVORITES,
    payload: advert,
  };
};

export const removeFromFavorites = id => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};

export const fetchAdvert = createAsyncThunk(
  'advert/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/advert?page=${page}&limit=4`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
