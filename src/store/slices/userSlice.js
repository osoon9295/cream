import { createSlice } from '@reduxjs/toolkit';
import { getUser } from '../../api/api.auth';

const fetchInitialUserData = async () => {
  try {
    const userData = await getUser();
    return userData;
  } catch (error) {
    console.error('Error fetching initial user data:', error);
    return null;
  }
};

const setInitialState = async () => {
  const userData = await fetchInitialUserData();
  return userData ? { ...userData } : {};
};

const initialState = setInitialState();

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export default userSlice.reducer;
