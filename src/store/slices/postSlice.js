import { createSlice } from '@reduxjs/toolkit';
import ModifyPost from '../../pages/ModifyPost';

const initialState = [];

const postSlice = createSlice({
  name: 'postList',
  initialState: initialState,
  reducers: {
    addPost: (state, action) => {
      return [...initialState, ...action.payload];
    },
    deletePost: (state, action) => {
      return state.filter((post) => {
        return action.payload !== post.id;
      });
    },
    changePost: (state, action) => {
      const modify = state.filter((post) => {
        return action.payload !== post.id;
      });
      return [...modify, ...action.payload];
    }
  }
});

export const { addPost, deletePost, changePost } = postSlice.actions;
export default postSlice.reducer;
