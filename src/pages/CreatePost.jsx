import React from 'react';
import PostContainer from '../components/PostContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../api/api.auth';

const CreatePost = () => {
  return (
    <>
      <PostContainer />
    </>
  );
};

export default CreatePost;
