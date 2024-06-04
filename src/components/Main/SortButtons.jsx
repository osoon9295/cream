import React, { useState } from 'react';
import styled from 'styled-components';

const StSortButtons = styled.div`
  /* background-color: blue; */
  max-width: 1240px;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  gap: 60px;
`;

const StPopularPost = styled.button`
  background-color: transparent;
  color: #bdbdbd;
  border: none;
  font-size: 250%;
  padding: 0 0 5% 0;
`;

const StlatestPost = styled.button`
  background-color: transparent;
  color: #bdbdbd;
  border: none;
  font-size: 250%;
  padding: 0 0 5% 0;
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

  //   useEffect(() => {
  //     setShowList(postList.slice(0, 12));
  //   }, [dfssdfsddf]);

  return (
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
  );
};

export default SortButtons;
