import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import SortButtons from './SortButtons';
import usePosts from '../../customHook/usePosts';
import CategoryTabs from './CategoryTabs';

const StWrapper = styled.main`
  /* background-color: blue; */
  width: 100%;
  margin: 4% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StContainer = styled.ul`
  /* background-color: beige; */
  max-width: 1240px;
  width: 70%;
  /* height: 120%; */
  display: grid;

  padding: 3%;
  /* gap: 3%; */

  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

  @media screen and (max-width: 600px) {
    width: 90%;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    /* gap: 1% 3%; */
  }
`;

const StMoreButton = styled.button`
  background-color: #ededed;
  width: 120px;
  min-height: 40px;
  border-radius: 20px;
  font-size: 16px;
  padding: 8px 16px;
  border: none;

  @media screen and (max-width: 600px) {
    width: 100px;
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const ShowPostList = () => {
  usePosts();
  const postList = useSelector((state) => state.postList);
  const [showList, setShowList] = useState([]);

  const createAt = postList.map((post) => {
    const date = post.created_at;
    const postDate = `${date.slice(0, 4)}${date.slice(5, 7)}${date.slice(8, 10)}${date.slice(11, 13)}${date.slice(
      14,
      16
    )}${date.slice(17, 19)}`;

    return setShowList((prev) => [...prev, { created_at: postDate }]);
  });

  console.log(createAt);

  // const createdAt = postList[1].created_at;
  // console.log(postList);
  // console.log(createdAt);

  postList,
    // let postDate = new Date();
    // let year = postDate.getFullYear();
    // let month = ('0' + (postDate.getMonth() + 1)).slice(-2);
    // let day = ('0' + postDate.getDate()).slice(-2);
    // let hour = ('0' + postDate.getHours()).slice(-2);
    // let min = ('0' + postDate.getMinutes()).slice(-2);
    // let sec = ('0' + postDate.getSeconds()).slice(-2);

    // postDate = Number(`${year}${month}${day}${hour}${min}${sec}`);

    // export const stringPostDate = `${year}.${month}.${day} ${hour}:${min}:${sec}`;

    useEffect(() => {
      setShowList(postList.slice(0, 12));
    }, [postList]);

  const moreShowList = () => {
    showList.length <= 12 ? setShowList(postList) : setShowList(postList.slice(0, 12));
  };
  return (
    <StWrapper>
      <SortButtons showList={showList} setShowList={setShowList} />
      <CategoryTabs />
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
