import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
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
  const initialPostList = useSelector((state) => state.postList);
  const sortType = useSelector((state) => state.sortType.type);
  const category = useSelector((state) => state.category.category);
  const subCategory = useSelector((state) => state.category.subCategory);
  const [showList, setShowList] = useState([]);

  const postList = initialPostList.map((post) => {
    const postDate = new Date(post.created_at).getTime();
    return { ...post, postDate };
  });

  useEffect(() => {
    const sortedPosts = getSortedPost();
    setShowList(sortedPosts.slice(0, 12));
  }, [initialPostList, sortType]);

  const getSortedPost = () => {
    let sortedPosts = [...postList];
    if (sortType === 'popular') {
      sortedPosts.sort((a, b) => b.popularity - a.popularity);
    } else if (sortType === 'latest') {
      sortedPosts.sort((a, b) => b.postDate - a.postDate);
    }
    return sortedPosts;
  };

  useEffect(() => {
    if (!subCategory) {
      setShowList(postList.slice(0, 12));
      return;
    }

    const filteredList = postList.filter((post) => {
      if (category === 'brand') return post.product_brand === subCategory;
      if (category === 'flavor') return post.product_taste === subCategory;
      if (category === 'type') return post.product_type === subCategory;
      return true;
    });

    setShowList(filteredList.slice(0, 12));
  }, [postList, category, subCategory]);

  const moreShowList = () => {
    const sortedPosts = getSortedPost();
    showList.length <= 12 ? setShowList(sortedPosts) : setShowList(sortedPosts.slice(0, 12));
  };

  return (
    <StWrapper>
      <SortButtons />
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
