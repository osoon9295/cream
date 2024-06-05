import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slices/postSlice';
import categorySlice from './slices/categorySlice';
<<<<<<< HEAD
//import userSlice from './slices/userSlice';
=======
// import userSlice from './slices/userSlice';
>>>>>>> 148a0914a5d4c27a4b574b2e3538bfe591d4bcfd

const store = configureStore({
  reducer: {
    postList: postSlice,
    category: categorySlice
<<<<<<< HEAD
    //user: userSlice
=======
    // user: userSlice
>>>>>>> 148a0914a5d4c27a4b574b2e3538bfe591d4bcfd
  }
});

export default store;
