import { createSlice } from '@reduxjs/toolkit';
import { getUser } from '../../api/api.auth';

//let test;

// const fetchInitialUserData = () => {
//   try {
//     const userData = getUser();
//     return userData;
//   } catch (error) {
//     console.error('초기 회원정보를 가지고올 수 없습니다.', error);
//     return null;
//   }
// };

// fetchInitialUserData().then((data) => {
//   test = data;
//   console.log(test);
// });
// const getTest = () => {
//   getUser().then((data) => {
//     console.log(data);
//   });
// };

//getTest();

//console.log(setInitialState());

//const initialState = fetchInitialUserData();

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     updateUser: (state, action) => {}
//   }
// });

// export const { updateUser } = userSlice.actions;
// export default userSlice.reducer;
