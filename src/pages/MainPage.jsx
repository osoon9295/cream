import { useNavigate } from 'react-router-dom';
import Carousel from '../components/main/Carousel';
import MainCategory from '../components/main/MainCategory';
import ShowPostList from '../components/main/ShowPostList';
import ToTopButton from '../components/main/ToTopButton';
import ToPostPage from '../components/main/ToPostPage';


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
