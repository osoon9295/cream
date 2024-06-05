import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setSubCategory } from '../../store/slices/categorySlice';
import { TaskAbortError } from '@reduxjs/toolkit';

const StList = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 29px;

    @media (max-width: 800px) {
      flex-wrap: wrap;
      gap: 10px;
      padding: 0 10px;
      justify-content: center;
    }

    @media (max-width: 410px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      width: 250px;
      padding: 0 10px;
      margin-top: 20px;
    }
  }
`;
const StLi = styled.li`
  width: 120px;
  padding: 12px 5px;
  background-color: ${(props) => (props.$active ? '#99FF89' : '#ededed')};
  border-radius: 100px;
  text-align: center;
  font-size: 20px;
  color: #2e2e2e;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 60px;
    font-size: 12px;
  }

  button {
    all: unset;
    width: inherit;

    letter-spacing: 2px;
  }
`;
const CategoryTabs = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category);
  // console.log(category)
  const categories = {
    brand: ['오리온', '빙그레', '롯데제과', '해태제과', '매일유업'],
    flavor: ['바닐라', '딸기', '초코', '기타'],
    type: ['콘', '바', '컵']
  };
  const [clickedItem, setClickedItem] = useState('');
  const currentCategoryTabs = categories[category] || [];
  // console.log(currentCategoryTabs);
  const handleTabClick = (tab) => {
    if (clickedItem === tab) {
      setClickedItem('');
      dispatch(setSubCategory(''));
    } else {
      setClickedItem(tab);
      dispatch(setSubCategory(tab));
    }
    // setClickedItem(tab);
    // dispatch(setSubCategory(tab));
  };
  return (
    <>
      <StList>
        <ul>
          {currentCategoryTabs.map((tab) => {
            return (
              <StLi key={tab} $active={clickedItem == tab}>
                <button onClick={() => handleTabClick(tab)}>{tab}</button>
              </StLi>
            );
          })}
        </ul>
      </StList>
    </>
  );
};

export default CategoryTabs;
