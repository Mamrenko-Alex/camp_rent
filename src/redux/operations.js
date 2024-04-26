import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://661b793965444945d04f8dcc.mockapi.io/v1';

export const fetchAdvert = createAsyncThunk(
  'advert/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/advert?page=${page}&${limit && `limit=${limit}`}`
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
