import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  subCategory: '',
  // 수정
  categories: {
    brand: ['오리온', '빙그레', '롯데제과', '해태제과', '매일유업'],
    flavor: ['바닐라', '딸기', '초코', '기타'],
    type: ['콘', '바', '컵']
  }
  // activeState: [false. false. false]
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // 값을 저장해주는 함수 state 업데이트
    setCategory: (state, action) => {
      state.category = state.category === action.payload ? '' : action.payload;
      state.subCategory = '';
      // 카테고리를 변경할 때 서브 카테고리를 초기화
      // action.payload로 받은 값을 category에 담아줌
    },
    setSubCategory: (state, action) => {
      //목록
      // payload로 다른 컴포넌트에 값 전달
      state.subCategory = action.payload;
    }
    // setActiveState: (state, action )
  }
});

export const { setCategory, setSubCategory } = categorySlice.actions;
export default categorySlice.reducer;
