import React from 'react';
import ShowPostList from '../components/main/ShowPostList';
import Carousel from '../components/main/Carousel';
import MainCategory from '../components/main/MainCategory';
import ToPostPage from '../components/main/ToPostPage';
import ToTopButton from '../components/main/ToTopButton';

const MainPage = () => {
  return (
    <div>
      <MainCategory />
      <Carousel />
      <ShowPostList />
      <ToPostPage />
      <ToTopButton />
    </div>
  );
};

export default MainPage;
