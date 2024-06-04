import { createSlice } from '@reduxjs/toolkit';
import { getUser } from '../../api/api.auth';

const initialState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export const {} = userSlice.actions;
export default userSlice.reducer;
