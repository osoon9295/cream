import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

let postDate = new Date();
let year = postDate.getFullYear();
let month = ('0' + (postDate.getMonth() + 1)).slice(-2);
let day = ('0' + postDate.getDate()).slice(-2);
let hour = ('0' + postDate.getHours()).slice(-2);
let min = ('0' + postDate.getMinutes()).slice(-2);
let sec = ('0' + postDate.getSeconds()).slice(-2);

postDate = Number(`${year}${month}${day}${hour}${min}${sec}`);

export const stringPostDate = `${year}.${month}.${day} ${hour}:${min}:${sec}`;

const initialState = [
  {
    id: uuid(),
    productName: '메로나',
    productBrand: '빙그레',
    image: '/img/Rectangle10.png',
    userId: '대추알',
    postContent:
      '너무 맛있어요. 짱이에요. 이런 맛은 세상에서 처음이다. 메론이 통째로 들어간 맛이에요!!!!! 그럴일은 없지만 메로나 안드셔보신분은 꼭 드셔보세요. 천상의 맛입니다. 먹어본 사람들은 백개는 더 먹어야 한다!!!!',
    popularity: 0,
    postDate: postDate + 1
  },
  {
    id: uuid(),
    productName: '비비빅',
    productBrand: '빙그레',
    image: '/img/Rectangle1.png',
    userId: '유나유나',
    postContent: '짱입니다.',
    popularity: 11,
    postDate: postDate + 2
  },
  {
    id: 3 + uuid(),
    productName: '설레임',
    productBrand: '롯데',
    image: '/img/Rectangle3.png',
    userId: '이준이준',
    postContent: '맨날 먹어요.',
    popularity: 8,
    postDate: postDate + 3
  },
  {
    id: uuid(),
    productName: '바닐라 파인트',
    productBrand: '하겐다즈',
    image: '/img/Rectangle4.png',
    userId: '지영지영',
    postContent: '새로운 바닐라 맛',
    popularity: 19,
    postDate: postDate + 4
  },
  {
    id: uuid(),
    productName: '초콜릿무스',
    productBrand: '베스킨라빈스',
    image: '/img/Rectangle4.png',
    userId: '준혁준혁',
    postContent: '진정한 초코',
    popularity: 25,
    postDate: postDate + 5
  },
  {
    id: uuid(),
    productName: '메로나',
    productBrand: '빙그레',
    image: '/img/Rectangle4.png',
    userId: '대추알',
    postContent: '너무 맛있어요',
    popularity: 7,
    postDate: postDate + 6
  },
  {
    id: 7 + uuid(),
    productName: '비비빅',
    productBrand: '빙그레',
    image: '/img/Rectangle1.png',
    userId: '유나유나',
    postContent: '짱입니다.',
    popularity: 1,
    postDate: postDate + 7
  },
  {
    id: 8 + uuid(),
    productName: '설레임',
    productBrand: '롯데',
    image: '/img/Rectangle1.png',
    userId: '이준이준',
    postContent: '맨날 먹어요.',
    popularity: 2,
    postDate: postDate + 8
  },
  {
    id: 9 + uuid(),
    productName: '바닐라 파인트',
    productBrand: '하겐다즈',
    image: '/img/Rectangle1.png',
    userId: '지영지영',
    postContent: '새로운 바닐라 맛',
    popularity: 19,
    postDate: postDate + 9
  },
  {
    id: 10 + uuid(),
    productName: '초콜릿무스',
    productBrand: '베스킨라빈스',
    image: '/img/Rectangle1.png',
    userId: '준혁준혁',
    postContent: '진정한 초코',
    popularity: 20,
    postDate: postDate + 10
  },
  {
    id: 11 + uuid(),
    productName: '메로나',
    productBrand: '빙그레',
    image: '/img/Rectangle1.png',
    userId: '대추알',
    postContent: '너무 맛있어요',
    popularity: 30,
    postDate: postDate + 11
  },
  {
    id: 12 + uuid(),
    productName: '비비빅',
    productBrand: '빙그레',
    image: '/img/Rectangle1.png',
    userId: '유나유나',
    postContent: '짱입니다.',
    popularity: 22,
    postDate: postDate + 12
  },
  {
    id: 13 + uuid(),
    productName: '설레임',
    productBrand: '롯데',
    image: '/img/Rectangle1.png',
    userId: '이준이준',
    postContent: '맨날 먹어요.',
    popularity: 34,
    postDate: postDate + 13
  },
  {
    id: 14 + uuid(),
    productName: '바닐라 파인트',
    productBrand: '하겐다즈',
    image: '/img/Rectangle4.png',
    userId: '지영지영',
    postContent: '새로운 바닐라 맛',
    popularity: 0,
    postDate: postDate + 14
  },
  {
    id: 15 + uuid(),
    productName: '초콜릿무스',
    productBrand: '베스킨라빈스',
    image: '/img/Rectangle1.png',
    userId: '준혁준혁',
    postContent: '진정한 초코',
    popularity: 5,
    postDate: postDate + 15
  }
];

const postSlice = createSlice({
  name: 'postList',
  initialState: initialState,
  reducers: {
    addPost: (state, action) => {
      return [...state, action.payload];
    }
  }
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
