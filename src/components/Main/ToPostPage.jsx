import React from 'react';
import { SlPencil } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StToPostPageButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #99ff89;
  width: 50px;
  height: 50px;

  font-size: 26px;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 5%;
  bottom: 13%;

  cursor: pointer;

  &:active {
    background-color: black;
    color: #ededed;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
    bottom: 100px;
  }
`;

const ToPostPage = () => {
  const navigate = useNavigate();

  return (
    <StToPostPageButton>
      <SlPencil onClick={() => navigate(`/createPost`)} />
    </StToPostPageButton>
  );
};

export default ToPostPage;
