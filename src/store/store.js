import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slices/postSlice';
import categorySlice from './slices/categorySlice';

const store = configureStore({
  reducer: {
    postList: postSlice,
    category: categorySlice
  }
});

export default store;
