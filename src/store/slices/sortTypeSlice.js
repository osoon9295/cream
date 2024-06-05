import { createSlice } from '@reduxjs/toolkit';

const initialState = { type: '' };

const sortTypeSlice = createSlice({
  name: 'sortType',
  initialState: initialState,
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
    }
  }
});

export const { changeType } = sortTypeSlice.actions;
export default sortTypeSlice.reducer;
