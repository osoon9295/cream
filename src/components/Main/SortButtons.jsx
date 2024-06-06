import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeType } from '../../store/slices/sortTypeSlice';

const StSortButtonsWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
`;

const StSortButtons = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  gap: 30px;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const StSortButton = styled.button`
  background-color: transparent;
  color: var(--font);
  border: none;
  font-size: 1.45rem;
  padding: 0 0 1% 0;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const SortButtons = () => {
  const [activeButton, setActiveButton] = useState('popular');
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.sortType);

  const handleSortChange = (type) => {
    dispatch(changeType(type));
  };

  useEffect(() => {
    setActiveButton(sortType.type);
  }, [sortType]);

  return (
    <StSortButtonsWrapper>
      <StSortButtons>
        <StSortButton
          onClick={() => handleSortChange('popular')}
          style={{ color: activeButton === 'popular' ? 'black' : '#bdbdbd' }}
        >
          {activeButton === 'popular' ? '✨ 인기게시물' : '인기게시물'}
        </StSortButton>
        <StSortButton
          onClick={() => handleSortChange('latest')}
          style={{ color: activeButton === 'latest' ? 'black' : '#bdbdbd' }}
        >
          {activeButton === 'latest' ? '🎉 최신게시물' : '최신게시물'}
        </StSortButton>
      </StSortButtons>
    </StSortButtonsWrapper>
  );
};

export default SortButtons;
