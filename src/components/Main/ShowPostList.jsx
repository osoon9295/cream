import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import SortButtons from './SortButtons';

const StWrapper = styled.main`
  /* background-color: blue; */
  width: 100%;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StContainer = styled.section`
  max-width: 1240px;
  width: 100%;
  min-height: 1320px;
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
`;

const StMoreButton = styled.button`
  margin: 50px;
`;

const ShowPostList = () => {
  const postList = useSelector((state) => state.postList);
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    setShowList(postList.slice(0, 12));
  }, []);

  console.log(showList);

  const moreShowList = () => {
    showList.length <= 12 ? setShowList(postList) : setShowList(postList.slice(0, 12));
  };
  return (
    <StWrapper>
      <SortButtons showList={showList} setShowList={setShowList} />
      <StContainer>
        {showList.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </StContainer>
      <StMoreButton onClick={moreShowList}>{showList.length <= 12 ? '더보기' : '줄이기'}</StMoreButton>
    </StWrapper>
  );
};

export default ShowPostList;
