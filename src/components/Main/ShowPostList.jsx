import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PostItem from './PostItem';

const StWrapper = styled.main`
  background-color: blue;
  width: 100%;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StContainer = styled.section`
  background-color: red;
  max-width: 1240px;
  width: 100%;
  max-height: 1397px;
  height: 100%;
  min-height: 1320px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
`;

// const StPostItemOutline = styled.div`
//   border: 1px dashed black;
//   width: 100%;
//   height: 100%;
// `;

const StMoreButton = styled.button`
  margin: 50px;
`;

const ShowPostList = () => {
  const postList = useSelector((state) => state.postList);
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    setShowList(postList.slice(0, 12));
  }, []);

  const moreShowList = () => {
    showList.length <= 12 ? setShowList(postList) : setShowList(postList.slice(0, 12));
  };

  const popularPosts = () => {
    const popularityRank = [...postList].sort((a, b) => b.popularity - a.popularity);
    setShowList(popularityRank);
  };

  const latestPosts = () => {
    const latestRank = [...postList].sort((a, b) => b.postDate - a.postDate);
    setShowList(latestRank);
  };

  return (
    <StWrapper>
      <button onClick={popularPosts}>인기게시글</button>
      <button onClick={latestPosts}>최신게시글</button>
      <StContainer>
        {showList.map((post) => {
          return (
            // <StPostItemOutline key={post.id}>
            <PostItem post={post} />
            // </StPostItemOutline>
          );
        })}
      </StContainer>
      <StMoreButton onClick={moreShowList}>{showList.length <= 12 ? '더보기' : '줄이기'}</StMoreButton>
    </StWrapper>
  );
};

export default ShowPostList;
