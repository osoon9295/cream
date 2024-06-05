import React from 'react';
import PostContainer from '../components/PostContainer';

const ModifyPost = () => {
  const postId = '123';
  return (
    <>
      <PostContainer postId={postId} />
    </>
  );
};

export default ModifyPost;
