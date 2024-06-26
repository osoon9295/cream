import React from 'react';
import ShowPostList from '../components/main/ShowPostList';
import Carousel from '../components/main/Carousel';
import MainCategory from '../components/main/MainCategory';
import ToPostPage from '../components/main/ToPostPage';
import ToTopButton from '../components/main/ToTopButton';
import MobileMenu from '../layout/MobileMenu';
const MainPage = () => {
  return (
    <div>
      <Carousel />
      <MainCategory />
      <ShowPostList />
      <ToPostPage />
      <ToTopButton />
      <MobileMenu />
    </div>
  );
};

export default MainPage;
