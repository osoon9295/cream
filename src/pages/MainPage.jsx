import React from 'react';
import ShowPostList from '../components/main/ShowPostList';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(`/mypage`)}>마이페이지</button>
      <button onClick={() => navigate(`/login`)}>로그인</button>
      <button onClick={() => navigate(`/join`)}>회원가입</button>
      {/* <MainCategory /> */}
      <ShowPostList />
    </div>
  );
};

export default MainPage;
