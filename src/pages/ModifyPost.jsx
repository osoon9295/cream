import React from 'react';
import PostContainer from '../components/PostContainer';
import { useParams } from 'react-router-dom';

const ModifyPost = () => {
  const param = useParams();

  return (
    <>
      <PostContainer postId={param.id} />
    </>
  );
};

export default ModifyPost;
