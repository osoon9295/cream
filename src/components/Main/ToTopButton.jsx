import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import styled from 'styled-components';

const StTopButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #ededed;
  width: 4.5rem;
  height: 4.5rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  font-size: 25px;
  color: var(--font);

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 75px;
  bottom: 40px;

  @media (max-width: 1120px) {
    display: none;
  }

  cursor: pointer;
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
