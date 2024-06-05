import React from 'react';
import PostContainer from '../components/PostContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../api/api.auth';

const CreatePost = () => {
  const posts = useSelector((state) => state.postList);
  console.log(posts);

  return (
    <>
      <PostContainer />
    </>
  );
};

export default CreatePost;
