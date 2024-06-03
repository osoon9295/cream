import React from 'react';
import PostContainer from '../components/PostContainer';
import PostName from '../components/post/ProductName';
import PostImage from '../components/post/ProductImage';
import PostReview from '../components/post/ProductReview';

const CreatePost = () => {
  return (
    <>
      <PostContainer postName={PostName()} postImage={PostImage()} postReview={PostReview()} />
    </>
  );
};

export default CreatePost;
