import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeType } from '../../store/slices/sortTypeSlice';

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

const SortButtons = ({ setShowList, postList }) => {
  const [activeButton, setActiveButton] = useState(null);
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.sortType);

  // console.log(postList);

  // const handleButtonClick = (type) => {
  //   // if (type === 'popular') {
  //   //   const popularityRank = [...postList].sort((a, b) => b.popularity - a.popularity);
  //   //   // popularityRank.length <= 12 ? setShowList(popularityRank) : setShowList(popularityRank.slice(0, 12));
  //   //   setShowList(popularityRank.slice(0, 12));
  //   // } else if (type === 'latest') {
  //   //   const latestRank = [...postList].sort((a, b) => b.postDate - a.postDate);
  //   //   // latestRank.length <= 12 ? setShowList(latestRank) : setShowList(latestRank.slice(0, 12));
  //   //   setShowList(latestRank.slice(0, 12));
  //   // }

  // };
  useEffect(() => {
    setActiveButton(sortType.type);
  }, [sortType]);

  return (
    <StSortButtonsWrapper>
      <StSortButtons>
        <StPopularPost
          onClick={() => dispatch(changeType('popular'))}
          style={{ color: activeButton === 'popular' ? 'black' : '#bdbdbd' }}
        >
          {activeButton === 'popular' ? '✨인기게시물' : '인기게시물'}
        </StPopularPost>
        <StlatestPost
          onClick={() => dispatch(changeType('latest'))}
          style={{ color: activeButton === 'latest' ? 'black' : '#bdbdbd' }}
        >
          {activeButton === 'latest' ? '✨최신게시물' : '최신게시물'}
        </StlatestPost>
      </StSortButtons>
    </StSortButtonsWrapper>
  );
};

export default SortButtons;
