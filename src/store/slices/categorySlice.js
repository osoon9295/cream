import { createSlice } from '@reduxjs/toolkit';

const initialState = { category: '', subCategory: '' };

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // 값을 저장해주는 함수 state 업데이트
    setCategory: (state, action) => {
      state.category = action.payload;
      // action.payload로 받은 값을 category에 담아줌
    },
    setSubCategory: (state, action) => {
      //목록
      // payload로 다른 컴포넌트에 값 전달
      state.subCategory = action.payload;
    }
  }
});

export const { setCategory, setSubCategory } = categorySlice.actions;
export default categorySlice.reducer;
