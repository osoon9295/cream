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
  const category = useSelector((state) => state.category.category);
  const getClassName = (className) => {
    return category === className ? 'active' : '';
  };
  const onClickHandler = (newCategory) => {
    if (category === newCategory) {
      dispatch(setCategory(''));
    } else {
      dispatch(setCategory(newCategory));
    }
  };
  return (
    <StMobileCategory>
      <li>
        <button className={getClassName('brand')} onClick={() => onClickHandler('brand')}>
          브랜드별
        </button>
      </li>
      <li>
        <button className={getClassName('flavor')} onClick={() => onClickHandler('flavor')}>
          맛별
        </button>
      </li>
      <li>
        <button className={getClassName('type')} onClick={() => onClickHandler('type')}>
          콘/바/컵
        </button>
      </li>
    </StMobileCategory>
  );
};

export default MobileCategory;
