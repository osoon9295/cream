import { createSlice } from '@reduxjs/toolkit';

const savesSlice = createSlice({
  name: 'saves',
  initialState: [],
  reducers: {
    addSave: (state, action) => {
      state.push(action.payload);
    },
    removeSave: (state, action) => {
      return state.filter((postId) => postId !== action.payload);
    }
  }
});

export const { addSave, removeSave } = savesSlice.actions;
export default savesSlice.reducer;
