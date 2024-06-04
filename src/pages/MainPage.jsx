import React from 'react';
import ShowPostList from '../components/main/ShowPostList';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/main/Carousel';
import MainCategory from '../components/main/MainCategory';
<<<<<<< HEAD
=======
import ToTopButton from '../components/main/ToTopButton';
import ToPostPage from '../components/main/ToPostPage';
>>>>>>> 0671580ae7ab3ac21df0afe5e9ba9c699ec650ec

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(`/mypage`)}>마이페이지</button>
      <button onClick={() => navigate(`/login`)}>로그인</button>
      <button onClick={() => navigate(`/join`)}>회원가입</button>
      <MainCategory />
      <Carousel />
      <ShowPostList />
      <ToPostPage />
      <ToTopButton />
    </div>
  );
};

export default MainPage;
