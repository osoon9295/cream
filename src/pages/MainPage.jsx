import React from 'react';
import ShowPostList from '../components/main/ShowPostList';
import Carousel from '../components/main/Carousel';
// import MainCategory from '../components/Main/MainCategory';

const MainPage = () => {
  return (
    <div>
      {/* <MainCategory /> */}
      <Carousel />
      <ShowPostList />
    </div>
  );
};

export default MainPage;
