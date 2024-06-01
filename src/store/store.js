import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slices/postSlice';

const store = configureStore({
  reducer: {
    postList: postSlice
  }
});

export default store;
