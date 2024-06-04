import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slices/postSlice';
import categorySlice from './slices/categorySlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    postList: postSlice,
    category: categorySlice,
    user: userSlice
  }
});

export default store;
