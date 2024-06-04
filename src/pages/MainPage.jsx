import { useNavigate } from 'react-router-dom';
import Carousel from '../components/main/Carousel';
import MainCategory from '../components/main/MainCategory';
import ShowPostList from '../components/main/ShowPostList';
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
    </div>
  );
};

export default MainPage;
