import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slices/postSlice';
import categorySlice from './slices/categorySlice';
import sortTypeSlice from './slices/sortTypeSlice';
//import userSlice from './slices/userSlice';
// import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    postList: postSlice,
    category: categorySlice,
    sortType: sortTypeSlice

    //user: userSlice

    // user: userSlice
  }
});

export default store;
