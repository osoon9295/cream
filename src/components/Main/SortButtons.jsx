import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeType } from '../../store/slices/sortTypeSlice';

const StSortButtonsWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: center;
`;

const StSortButtons = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  gap: 30px;
`;

const StSortButton = styled.button`
  background-color: transparent;
  color: #bdbdbd;
  border: none;
  font-size: 1.45rem;
  padding: 0 0 1% 0;
`;

const SortButtons = () => {
  const [activeButton, setActiveButton] = useState(null);
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
          {activeButton === 'popular' ? '✨인기게시물' : '인기게시물'}
        </StSortButton>
        <StSortButton
          onClick={() => handleSortChange('latest')}
          style={{ color: activeButton === 'latest' ? 'black' : '#bdbdbd' }}
        >
          {activeButton === 'latest' ? '✨최신게시물' : '최신게시물'}
        </StSortButton>
      </StSortButtons>
    </StSortButtonsWrapper>
  );
};

export default SortButtons;
