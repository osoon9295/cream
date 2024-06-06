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
  @media (max-width: 800px) {
    padding: 10px 0px;
  }

  li {
    font-size: 20px;
    cursor: pointer;
    color: #969696;

    @media (max-width: 800px) {
      font-size: 15px;
    }
  }
`;

const MobileCategory = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category);
  const getClassName = (className) => {
    return category === className ? 'active' : '';
  };
  const onClickHandler = (newCategory) => {
    // if (category === newCategory) {
    //   dispatch(setCategory(''));
    // } else {
    //   dispatch(setCategory(newCategory));
    // }
    dispatch(setCategory(newCategory));
  };
  return (
    <StMobileCategory>
      <li className={getClassName('brand')} onClick={() => onClickHandler('brand')}>
        브랜드별
      </li>
      <li className={getClassName('flavor')} onClick={() => onClickHandler('flavor')}>
        맛별
      </li>
      <li button className={getClassName('type')} onClick={() => onClickHandler('type')}>
        콘/바/컵
      </li>
    </StMobileCategory>
  );
};

export default MobileCategory;
