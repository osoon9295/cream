import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostContainer from '../components/PostContainer';
import MobileMenu from '../layout/MobileMenu';
import { fetchUser } from '../store/slices/authSlice';

const CreatePost = () => {
  const dispatch = useDispatch();
  const { user, isSignedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
    if (!isSignedIn) {
      alert('로그인 후 이용 가능합니다.');
      navigate('/login');
    }
  }, [dispatch]);

  return (
    <>
      <PostContainer />
      <MobileMenu />
    </>
  );
};

export default CreatePost;
