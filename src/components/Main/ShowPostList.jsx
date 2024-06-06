import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import SortButtons from './SortButtons';
import usePosts from '../../customHook/usePosts';
import CategoryTabs from './CategoryTabs';
import supabase from '../../api/api.supabase';

const StWrapper = styled.main`
  width: 100%;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StContainer = styled.ul`
  max-width: 1240px;
  overflow: hidden;
  display: grid;
  padding-bottom: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  gap: 30px;

  @media screen and (max-width: 1240px) {
    width: 90%;
  }
  @media screen and (min-width: 800px) and (max-width: 1120px) {
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  }
  @media screen and (min-width: 601px) and (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  }
  @media screen and (min-width: 500px) and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  }

  @media screen and (min-width: 320px) and (max-width: 499px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
  @media screen and (max-width: 319px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
`;

const StMoreButton = styled.button`
  background-color: var(--default-color);
  border-radius: 50px;
  font-size: 0.8rem;
  padding: 15px 30px;
  border: none;
  &:hover {
    cursor: pointer;
    background: var(--border-color);
  }

  @media screen and (max-width: 600px) {
    width: 100px;
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const GridWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ShowPostList = () => {
  usePosts();
  const initialPostList = useSelector((state) => state.postList);
  const sortType = useSelector((state) => state.sortType.type);
  const category = useSelector((state) => state.category.category);
  const subCategory = useSelector((state) => state.category.subCategory);
  const [showList, setShowList] = useState([]);
  const [postUser, setPostUser] = useState([]);

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

  //회원 정보 가져오기
  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase.from('member').select('user_id, user_name, user_imageSrc');
      setPostUser(data);
      if (error) {
        console.log('error =>', error);
      } else {
        console.log('data =>', data);
      }
    };
    fetchMembers();
  }, []);

  // useEffect(() => {
  //   setShowList(postList.slice(0, 12));
  // }, [initialPostList]);

  useEffect(() => {
    const filteredList = postList.filter((post) => {
      if (!subCategory) return true;
      if (category === 'brand') return post.product_brand === subCategory;
      if (category === 'flavor') return post.product_taste === subCategory;
      if (category === 'type') return post.product_type === subCategory;
      return true;
    });

    setShowList(filteredList.slice(0, 12));
  }, [initialPostList, category, subCategory]);

  const moreShowList = () => {
    const sortedPosts = getSortedPost();
    showList.length <= 12 ? setShowList(sortedPosts) : setShowList(sortedPosts.slice(0, 12));
  };

  return (
    <StWrapper>
      <SortButtons />
      <CategoryTabs />
      <GridWrap>
        <StContainer>
          {showList.map((post) => {
            const userImg = postUser.find((el) => el.user_id === post.user_id);
            return <PostItem key={post.id} post={post} userImg={userImg} />;
          })}
        </StContainer>
      </GridWrap>
      <StMoreButton onClick={moreShowList}>{showList.length <= 12 ? '더보기' : '줄이기'}</StMoreButton>
    </StWrapper>
  );
};

export default ShowPostList;
