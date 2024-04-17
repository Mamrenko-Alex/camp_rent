import persistReducer from 'redux-persist/es/persistReducer';
import {
  FETCH_ADVERT_REQUEST,
  FETCH_ADVERT_SUCCESS,
  FETCH_ADVERT_FAILURE,
  FETCH_ADVERT_LOAD_MORE,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from './operations';
import persistConfig from './persistConfig';

const initialState = {
  loading: false,
  isLoadMore: true,
  advert: [],
  favorites: [],
  error: '',
};

const advertReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADVERT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ADVERT_SUCCESS:
      return {
        ...state,
        loading: false,
        advert: action.payload,
        // advert: [...state.advert, ...action.payload],
        error: '',
      };
    case FETCH_ADVERT_FAILURE:
      return {
        ...state,
        loading: false,
        advert: [],
        error: action.payload,
      };
    case FETCH_ADVERT_LOAD_MORE:
      return {
        ...state,
        isLoadMore: action.payload,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(ad => ad.id !== action.payload),
      };
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, advertReducer);

export default persistedReducer;
