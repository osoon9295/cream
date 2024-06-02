import React from 'react';
import styled from 'styled-components';

const StPostItem = styled.article`
  background-color: orange;
  margin: 5% auto;
  height: 90%;
  width: 90%;
  min-width: 285px;
  min-height: 427px;
`;

const PostItem = ({ post }) => {
  return (
    <div>
      <StPostItem>
        <div>{post.postDate}</div>
        <div>{post.image}</div>
        <div>{post.userId}</div>
        <div>{post.productName}</div>
        <div>{post.postContent}</div>
        <div>{post.popularity}</div>
      </StPostItem>
    </div>
  );
};

export default PostItem;
