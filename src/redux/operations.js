import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://661b793965444945d04f8dcc.mockapi.io/v1';

export const FETCH_ADVERT_REQUEST = 'FETCH_ADVERT_REQUEST';
export const FETCH_ADVERT_SUCCESS = 'FETCH_ADVERT_SUCCESS';
export const FETCH_ADVERT_FAILURE = 'FETCH_ADVERT_FAILURE';
export const FETCH_ADVERT_LOAD_MORE = 'FETCH_ADVERT_LOAD_MORE';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const fetchAdvertRequest = () => {
  return {
    type: FETCH_ADVERT_REQUEST,
  };
};

export const fetchAdvertSuccess = advert => {
  return {
    type: FETCH_ADVERT_SUCCESS,
    payload: advert,
  };
};

export const fetchAdvertFailure = error => {
  return {
    type: FETCH_ADVERT_FAILURE,
    payload: error,
  };
};

export const fetchAdvertLoadMore = hasMore => {
  return {
    type: FETCH_ADVERT_LOAD_MORE,
    payload: hasMore,
  };
};

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

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAdvert = createAsyncThunk(
  'advert/fetchAll',
  async (page, thunkAPI) => {
    thunkAPI.dispatch(fetchAdvertRequest());
    const LIMIT = 13;
    try {
      const response = await axios.get(`/advert?page=${page}&limit=4`);
      const data = response.data;
      console.log(LIMIT < page * 4);
      return thunkAPI.dispatch(fetchAdvertSuccess(data));
    } catch (error) {
      return thunkAPI.dispatch(fetchAdvertFailure(error));
    } finally {
      LIMIT < page * 4
        ? thunkAPI.dispatch(fetchAdvertLoadMore(false))
        : thunkAPI.dispatch(fetchAdvertLoadMore(true));
    }
  }
);

// export const fetchAdvert = page => {
//   return async dispatch => {
//     dispatch(fetchAdvertRequest());
//     try {
//       console.log(`/advert?page=${page}&limit=4`);
//       const response = await axios.get(`/advert?page=${page}&limit=4`);
//       const data = response.data;
//       console.log(response);
//       data.length <= page * 4
//         ? dispatch(fetchAdvertLoadMore(false))
//         : dispatch(fetchAdvertLoadMore(true));
//       dispatch(fetchAdvertSuccess(data));
//     } catch (error) {
//       console.log(error);
//       dispatch(fetchAdvertFailure(error));
//     }
//   };
// };
