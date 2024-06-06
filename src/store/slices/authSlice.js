// src/redux/authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkSignIn, getUser, signOut } from '../../api/api.auth';

export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
  const isSignedIn = await checkSignIn();
  if (isSignedIn) {
    const userData = await getUser();
    return userData;
  } else {
    return null;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isSignedIn: false,
    status: 'idle'
  },
  reducers: {
    logOut: (state) => {
      signOut();
      state.user = null;
      state.isSignedIn = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.isSignedIn = !!action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = 'failed';
        state.user = null;
        state.isSignedIn = false;
      });
  }
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
