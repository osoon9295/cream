import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCategory } from '../../store/slices/categorySlice';

const StMobileCategory = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 68px;
  padding: 18px 0;
  background-color: #d5e0fc;

  @media (min-width: 1120px) {
    display: none;
  }

  button {
    font-size: 20px;
    border: transparent;
    background-color: transparent;
    cursor: pointer;
    color: #969696;
    @media (max-width: 800px) {
      font-size: 15px;
    }
  }

  @media (max-width: 800px) {
    padding: 10px 0px;
  }
`;

const MobileCategory = () => {
  const dispatch = useDispatch();
  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };
  return (
    <StMobileCategory>
      <li>
        <button onClick={() => handleCategoryClick('brand')}>브랜드별</button>
      </li>
      <li>
        <button onClick={() => handleCategoryClick('flavor')}>맛별</button>
      </li>
      <li>
        <button onClick={() => handleCategoryClick('type')}>콘/바/컵</button>
      </li>
    </StMobileCategory>
  );
};

export default MobileCategory;
