import persistReducer from 'redux-persist/es/persistReducer';
import { fetchAdvert } from './operations';
import persistConfig from './persistConfig';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isLoadMore: true,
  advert: [],
  favorites: [],
  error: '',
};

const loadingHandler = state => {
  state.isLoading = true;
};

const errorHandler = (state, action) => {
  state.error = action.payload;
  state.isLoading = !state.isLoading;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: initialState,
  reducers: {
    clearAdverts: state => {
      state.advert = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdvert.pending, loadingHandler)
      .addCase(fetchAdvert.rejected, errorHandler)
      .addCase(fetchAdvert.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
        if (JSON.stringify(state.advert) !== JSON.stringify(payload)) {
          state.advert = [...state.advert, ...payload];
        }
        state.isLoadMore = state.advert.length < 13;
      });
  },
});

export const advertReducer = advertsSlice.reducer;

export const { clearAdverts } = advertsSlice.actions;

const persistedReducer = persistReducer(persistConfig, advertReducer);

export default persistedReducer;
