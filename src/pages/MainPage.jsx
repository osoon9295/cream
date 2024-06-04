import React from 'react';
import ShowPostList from '../components/main/ShowPostList';
import Carousel from '../components/main/Carousel';
import MainCategory from '../components/main/MainCategory';
const MainPage = () => {
  return (
    <div>
      <MainCategory />
      <Carousel />
      <ShowPostList />
    </div>
  );
};

export default MainPage;
