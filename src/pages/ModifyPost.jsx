import React from 'react';
import PostContainer from '../components/PostContainer';

const ModifyPost = () => {
  const postId = '65b8bc67-7e8d-4a93-28a0-029fc3ac4049';
  return (
    <>
      <PostContainer postId={postId} />
    </>
  );
};

export default ModifyPost;
