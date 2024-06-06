import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import categorySlice from './slices/categorySlice';
import postSlice from './slices/postSlice';
import sortTypeSlice from './slices/sortTypeSlice';
//import userSlice from './slices/userSlice';
// import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    postList: postSlice,
    category: categorySlice,
    sortType: sortTypeSlice,
    auth: authReducer
    //user: userSlice

    // user: userSlice
  }
});

export default store;
