import React from 'react';
import PostContainer from '../components/PostContainer';
import MobileMenu from '../layout/MobileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../api/api.auth';

const CreatePost = () => {
  return (
    <>
      <PostContainer />
      <MobileMenu />
    </>
  );
};

export default CreatePost;
