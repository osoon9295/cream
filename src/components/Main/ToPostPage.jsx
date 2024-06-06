import React from 'react';
import { SlPencil } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StToPostPageButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: var(--sub-color);
  width: 4.5rem;
  height: 4.5rem;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.1);
  font-size: 25px;
  color: var(--font);

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 75px;
  bottom: 20%;
  cursor: pointer;

  @media (max-width: 1240px) {
    width: 3rem;
    height: 3rem;
    font-size: 18px;
  }

  @media (max-width: 1120px) {
    display: none;
  }

  &:active {
    background-color: black;
    color: #ededed;
    cursor: pointer;
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
