import React, { useState } from 'react';
import styled from 'styled-components';

const StSortButtonsWrapper = styled.div`
  width: 100%;
  padding: 3% 0 0 5%;
  border-bottom: 1px solid #bdbdbd;

  display: flex;
  justify-content: center;
`;

const StSortButtons = styled.div`
  /* background-color: blue; */
  max-width: 1240px;
  width: 100%;
  display: flex;
  gap: 30px;
`;

const StPopularPost = styled.button`
  background-color: transparent;
  color: #bdbdbd;
  border: none;
  font-size: 150%;
  padding: 0 0 1% 0;
`;

const StlatestPost = styled.button`
  background-color: transparent;
  color: #bdbdbd;
  border: none;
  font-size: 150%;
  padding: 0 0 1% 0;
`;

const SortButtons = ({ showList, setShowList }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (type) => {
    if (type === 'popular') {
      const popularityRank = [...showList].sort((a, b) => b.popularity - a.popularity);
      setShowList(popularityRank);
    } else if (type === 'latest') {
      const latestRank = [...showList].sort((a, b) => b.postDate - a.postDate);
      setShowList(latestRank);
    }
    setActiveButton((prev) => (prev === type ? null : type));
  };

  return (
    <StSortButtonsWrapper>
      <StSortButtons>
        <StPopularPost
          onClick={() => handleButtonClick('popular')}
          style={{ color: activeButton === 'popular' ? 'black' : '#bdbdbd' }}
        >
          {activeButton === 'popular' ? '✨인기게시물' : '인기게시물'}
        </StPopularPost>
        <StlatestPost
          onClick={() => handleButtonClick('latest')}
          style={{ color: activeButton === 'latest' ? 'black' : '#bdbdbd' }}
        >
          {activeButton === 'latest' ? '✨최신게시물' : '최신게시물'}
        </StlatestPost>
      </StSortButtons>
    </StSortButtonsWrapper>
  );
};

export default SortButtons;
