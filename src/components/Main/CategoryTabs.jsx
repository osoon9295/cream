import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StList = styled.div`
  max-width: 1240px;
  width: 100%;
  margin-bottom: 40px;

  ul {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 29px;
  }

  li {
    width: 120px;
    padding: 12px 5px;
    background-color: #ededed;
    border-radius: 100px;
    text-align: center;
  }

  button {
    border: none;
    font-size: 20px;
    letter-spacing: 2px;
    cursor: pointer;
  }
`;

const CategoryTabs = () => {
  const category = useSelector((state) => state.category.category);
  const categories = {
    brand: ['오리온', '빙그레', '롯데제과', '해태제과', '매일유업'],
    flavor: ['바닐라', '딸기', '초코', '기타'],
    type: ['콘', '바', '컵']
  };
  const currentCategoryTabs = categories[category] || [];

  return (
    <>
      <StList>
        <ul>
          {currentCategoryTabs.map((tab) => {
            return (
              <li key={tab}>
                <button>{tab}</button>
              </li>
            );
          })}
        </ul>
      </StList>
    </>
  );
};

export default CategoryTabs;
