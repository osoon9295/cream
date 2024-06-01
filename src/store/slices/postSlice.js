import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1 + new Date().getTime(),
    productName: '메로나',
    productBrand: '빙그레',
    image: 'img',
    userId: '대추알',
    postContent: '너무 맛있어요',
    popularity: 0
  },
  {
    id: 2 + new Date().getTime(),
    productName: '비비빅',
    productBrand: '빙그레',
    image: 'img',
    userId: '유나유나',
    postContent: '짱입니다.',
    popularity: 11
  },
  {
    id: 3 + new Date().getTime(),
    productName: '설레임',
    productBrand: '롯데',
    image: 'img',
    userId: '이준이준',
    postContent: '맨날 먹어요.',
    popularity: 8
  },
  {
    id: 4 + new Date().getTime(),
    productName: '바닐라 파인트',
    productBrand: '하겐다즈',
    image: 'img',
    userId: '지영지영',
    postContent: '새로운 바닐라 맛',
    popularity: 19
  },
  {
    id: 5 + new Date().getTime(),
    productName: '초콜릿무스',
    productBrand: '베스킨라빈스',
    image: 'img',
    userId: '준혁준혁',
    postContent: '진정한 초코',
    popularity: 25
  },
  {
    id: 6 + new Date().getTime(),
    productName: '메로나',
    productBrand: '빙그레',
    image: 'img',
    userId: '대추알',
    postContent: '너무 맛있어요',
    popularity: 7
  },
  {
    id: 7 + new Date().getTime(),
    productName: '비비빅',
    productBrand: '빙그레',
    image: 'img',
    userId: '유나유나',
    postContent: '짱입니다.',
    popularity: 1
  },
  {
    id: 8 + new Date().getTime(),
    productName: '설레임',
    productBrand: '롯데',
    image: 'img',
    userId: '이준이준',
    postContent: '맨날 먹어요.',
    popularity: 2
  },
  {
    id: 9 + new Date().getTime(),
    productName: '바닐라 파인트',
    productBrand: '하겐다즈',
    image: 'img',
    userId: '지영지영',
    postContent: '새로운 바닐라 맛',
    popularity: 19
  },
  {
    id: 10 + new Date().getTime(),
    productName: '초콜릿무스',
    productBrand: '베스킨라빈스',
    image: 'img',
    userId: '준혁준혁',
    postContent: '진정한 초코',
    popularity: 20
  },
  {
    id: 11 + new Date().getTime(),
    productName: '메로나',
    productBrand: '빙그레',
    image: 'img',
    userId: '대추알',
    postContent: '너무 맛있어요',
    popularity: 30
  },
  {
    id: 12 + new Date().getTime(),
    productName: '비비빅',
    productBrand: '빙그레',
    image: 'img',
    userId: '유나유나',
    postContent: '짱입니다.',
    popularity: 22
  },
  {
    id: 13 + new Date().getTime(),
    productName: '설레임',
    productBrand: '롯데',
    image: 'img',
    userId: '이준이준',
    postContent: '맨날 먹어요.',
    popularity: 34
  },
  {
    id: 14 + new Date().getTime(),
    productName: '바닐라 파인트',
    productBrand: '하겐다즈',
    image: 'img',
    userId: '지영지영',
    postContent: '새로운 바닐라 맛',
    popularity: 0
  },
  {
    id: 15 + new Date().getTime(),
    productName: '초콜릿무스',
    productBrand: '베스킨라빈스',
    image: 'img',
    userId: '준혁준혁',
    postContent: '진정한 초코',
    popularity: 5
  }
];

const postSlice = createSlice({
  name: 'postList',
  initialState: initialState,
  reducers: {}
});

export const { popularPosts } = postSlice.actions;
export default postSlice.reducer;
