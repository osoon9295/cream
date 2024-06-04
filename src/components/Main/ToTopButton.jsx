import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import styled from 'styled-components';

const StTopButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #ededed;
  width: 50px;
  height: 50px;

  font-size: 30px;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 5%;
  bottom: 5%;

  cursor: pointer;

  &:active {
    background-color: black;
    color: #ededed;
    cursor: pointer;
  }
`;

const ToTopButton = () => {
  const clickTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <StTopButton>
      <IoIosArrowUp onClick={clickTopButton} />
    </StTopButton>
  );
};

export default ToTopButton;
