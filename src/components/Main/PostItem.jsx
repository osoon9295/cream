import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { IoHeartOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { stringPostDate } from '../../store/slices/postSlice';

const StPostItem = styled.button`
  background-color: transparent;
  width: 100%;
  height: auto;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5%;
  cursor: pointer;
  border: none;

  /* @media screen and (max-width: 500px) {
    width: 40%;
  } */
`;

const StImage = styled.img`
  width: 90%;
  height: auto;
  border-radius: 5%;
`;

const StIdAndLikeButtons = styled.div`
  /* background-color: aqua; */
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StPostUserId = styled.span`
  font-size: 200%;
  font-weight: 700;
`;

const StPostContentWrapper = styled.div`
  /* background-color: green; */
  width: 90%;
  height: 100%;
`;

const StPostContent = styled.p`
  overflow: hidden;
  white-space: nowrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-align: justify;
`;

const StPostDate = styled.div`
  background-color: aliceblue;
  width: 90%;
  display: flex;
  justify-content: left;
`;
const PostItem = ({ post }) => {
  const { image, userId, productName, postContent, popularity } = post;

  return (
    <StPostItem>
      <StImage src={image} alt={productName} />
      <StIdAndLikeButtons>
        <StPostUserId>{userId}</StPostUserId>
        <span>
          <IoHeartOutline />
          {popularity}
          <CiBookmark />
        </span>
      </StIdAndLikeButtons>
      <StPostContentWrapper>
        <StPostContent>{postContent}</StPostContent>
      </StPostContentWrapper>
      <StPostDate>{stringPostDate}</StPostDate>
    </StPostItem>
  );
};
export default PostItem;
