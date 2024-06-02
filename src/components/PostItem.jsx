import React from 'react';
import styled from 'styled-components';
import { CiBookmark } from 'react-icons/ci';
import { IoHeartOutline } from 'react-icons/io5';
import { stringPostDate } from '../store/slices/postSlice';

const StPostItem = styled.article`
  background-color: orange;
  margin: 5% auto;
  height: 90%;
  width: 90%;
  min-width: 285px;
  min-height: 427px;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5%;
`;

const StImage = styled.img`
  width: 90%;
  height: auto;
  border-radius: 5%;
`;

const StIdAndLikeButtons = styled.div`
  background-color: aqua;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PostItem = ({ post }) => {
  const { image, userId, productName, postContent, popularity, postDate } = post;

  return (
    <StPostItem>
      <StImage src={image} alt={productName} />
      <StIdAndLikeButtons>
        {userId}
        <span>
          <IoHeartOutline />
          {popularity}
          <CiBookmark />
        </span>
      </StIdAndLikeButtons>
      <div>{postContent}</div>
      <div>{stringPostDate}</div>
      {/* <div>{postDate}</div> */}
    </StPostItem>
  );
};
export default PostItem;
