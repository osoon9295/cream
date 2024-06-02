import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1 + new Date().getTime(),
    productName: '메로나',
    productBrand: '빙그레',
    image: 'img',
    userId: '대추알',
    postContent: '너무 맛있어요',
    popularity: 0,
    postDate: 1 + new Date().getTime()
  },
  {
    id: 2 + new Date().getTime(),
    productName: '비비빅',
    productBrand: '빙그레',
    image: 'img',
    userId: '유나유나',
    postContent: '짱입니다.',
    popularity: 11,
    postDate: 2 + new Date().getTime()
  },
  {
    id: 3 + new Date().getTime(),
    productName: '설레임',
    productBrand: '롯데',
    image: 'img',
    userId: '이준이준',
    postContent: '맨날 먹어요.',
    popularity: 8,
    postDate: 3 + new Date().getTime()
  },
  {
    id: 4 + new Date().getTime(),
    productName: '바닐라 파인트',
    productBrand: '하겐다즈',
    image: 'img',
    userId: '지영지영',
    postContent: '새로운 바닐라 맛',
    popularity: 19,
    postDate: 4 + new Date().getTime()
  },
  {
    id: 5 + new Date().getTime(),
    productName: '초콜릿무스',
    productBrand: '베스킨라빈스',
    image: 'img',
    userId: '준혁준혁',
    postContent: '진정한 초코',
    popularity: 25,
    postDate: 5 + new Date().getTime()
  },
  {
    id: 6 + new Date().getTime(),
    productName: '메로나',
    productBrand: '빙그레',
    image: 'img',
    userId: '대추알',
    postContent: '너무 맛있어요',
    popularity: 7,
    postDate: 6 + new Date().getTime()
  },
  {
    id: 7 + new Date().getTime(),
    productName: '비비빅',
    productBrand: '빙그레',
    image: 'img',
    userId: '유나유나',
    postContent: '짱입니다.',
    popularity: 1,
    postDate: 7 + new Date().getTime()
  },
  {
    id: 8 + new Date().getTime(),
    productName: '설레임',
    productBrand: '롯데',
    image: 'img',
    userId: '이준이준',
    postContent: '맨날 먹어요.',
    popularity: 2,
    postDate: 8 + new Date().getTime()
  },
  {
    id: 9 + new Date().getTime(),
    productName: '바닐라 파인트',
    productBrand: '하겐다즈',
    image: 'img',
    userId: '지영지영',
    postContent: '새로운 바닐라 맛',
    popularity: 19,
    postDate: 9 + new Date().getTime()
  },
  {
    id: 10 + new Date().getTime(),
    productName: '초콜릿무스',
    productBrand: '베스킨라빈스',
    image: 'img',
    userId: '준혁준혁',
    postContent: '진정한 초코',
    popularity: 20,
    postDate: 10 + new Date().getTime()
  },
  {
    id: 11 + new Date().getTime(),
    productName: '메로나',
    productBrand: '빙그레',
    image: 'img',
    userId: '대추알',
    postContent: '너무 맛있어요',
    popularity: 30,
    postDate: 11 + new Date().getTime()
  },
  {
    id: 12 + new Date().getTime(),
    productName: '비비빅',
    productBrand: '빙그레',
    image: 'img',
    userId: '유나유나',
    postContent: '짱입니다.',
    popularity: 22,
    postDate: 12 + new Date().getTime()
  },
  {
    id: 13 + new Date().getTime(),
    productName: '설레임',
    productBrand: '롯데',
    image: 'img',
    userId: '이준이준',
    postContent: '맨날 먹어요.',
    popularity: 34,
    postDate: 13 + new Date().getTime()
  },
  {
    id: 14 + new Date().getTime(),
    productName: '바닐라 파인트',
    productBrand: '하겐다즈',
    image: 'img',
    userId: '지영지영',
    postContent: '새로운 바닐라 맛',
    popularity: 0,
    postDate: 14 + new Date().getTime()
  },
  {
    id: 15 + new Date().getTime(),
    productName: '초콜릿무스',
    productBrand: '베스킨라빈스',
    image: 'img',
    userId: '준혁준혁',
    postContent: '진정한 초코',
    popularity: 5,
    postDate: 15 + new Date().getTime()
  }
];

const postSlice = createSlice({
  name: 'postList',
  initialState: initialState,
  reducers: {}
});

export const { popularPosts } = postSlice.actions;
export default postSlice.reducer;
