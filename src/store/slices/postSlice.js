import { createSlice } from '@reduxjs/toolkit';

// let postDate = new Date();
// let year = postDate.getFullYear();
// let month = ('0' + (postDate.getMonth() + 1)).slice(-2);
// let day = ('0' + postDate.getDate()).slice(-2);
// let hour = ('0' + postDate.getHours()).slice(-2);
// let min = ('0' + postDate.getMinutes()).slice(-2);
// let sec = ('0' + postDate.getSeconds()).slice(-2);

// postDate = Number(`${year}${month}${day}${hour}${min}${sec}`);

// export const stringPostDate = `${year}.${month}.${day} ${hour}:${min}:${sec}`;

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
