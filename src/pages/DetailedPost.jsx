import React, { useEffect, useState } from 'react';
import supabase from '../supabase';
import { deletePost } from '../store/slices/postSlice';
import { useNavigate } from 'react-router-dom';
import usePosts from '../customHook/usePosts';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { TagBox } from '../components/post/Tag';
import { getUser } from '../api/api.auth';

const PostInner = styled.div`
  max-width: 1240px;
  width: 70vw;
  height: 80vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostTitle = styled.div`
  width: 100%;
  margin-top: 8%;
  padding-left: 15%;
  padding-bottom: 10px;
  border-bottom: 1px solid #efefef;
  font-size: 2rem;
  color: #484848;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StButton = styled.button`
  width: 42px;
  height: 18px;
  background-color: transparent;
  border-color: transparent;
  border-right: 1px solid #c0c0c0;
  border: ${(props) => props.border};
  color: #c0c0c0;
  padding: 0 2px;
  cursor: pointer;
`;

const PostInfo = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #efefef;
  font-size: 1rem;
  color: #484848;
  display: flex;
  align-items: center;
  margin-top: 7%;
  padding-bottom: 10px;
`;

const ProfileImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #efefef;
  margin-right: 10px;
`;

const PostDate = styled.div`
  width: 6rem;
  color: #c0c0c0;
  font-size: 0.8rem;
`;

const PostBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5%;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5%;
`;

const PostImg = styled.div`
  width: 15rem;
  height: 20rem;
  border-radius: 10%;
  background-color: #efefef;
  overflow: auto;
  margin-top: 12px;
`;

const TagContainer = styled.div`
  border-bottom: 1px solid #efefef;
  padding: 10% 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const PostContent = styled.div`
  width: 80%;
  font-size: 1rem;
  color: #484848;
  padding: 10%;
  margin-bottom: 10%;
`;

const DetailedPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess } = usePosts();

  const posts = useSelector((state) => state.postList);
  console.log(posts);

  const onDeletePost = async (id) => {
    const response = await supabase.from('posts').delete().eq('id', id);
    dispatch(deletePost(id));
    console.log(response);
  };

  const postId = '65b8bc67-7e8d-4a93-28a0-029fc3ac4049';

  let detail = null;
  let date = '';
  let user = '';
  let name = '';

  const fetchMembers = async () => {
    const userData = await getUser();
    console.log(userData);
    const { data, error } = await supabase.from('member').select('*').eq('user_id', userData.email);
    console.log(data);
    if (error) {
      console.log('error =>', error);
    } else {
      console.log('data =>', data);
      console.log(user);
    }
  };

  if (isSuccess) {
    detail = posts.filter((post) => post.id === postId)[0];
    date = detail.created_at.split('T')[0];
    user = detail.user_id;
    fetchMembers();
  }

  return (
    <>
      {isSuccess && (
        <>
          <PostTitle>
            {detail.product_name}
            <div style={{ marginLeft: '20%' }}>
              <StButton
                onClick={() => {
                  navigate('/modifyPost');
                }}
              >
                수정
              </StButton>
              <StButton border="none">삭제</StButton>
            </div>
          </PostTitle>
          <PostInner>
            <PostInfo>
              <ProfileImg></ProfileImg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                지영
                <PostDate>{date}</PostDate>
              </div>
            </PostInfo>
            <PostBox>
              <PostImg>
                <img src={detail.product_imageSrc} style={{ height: '100%', objectFit: 'cover' }} />
              </PostImg>
              <div>
                <TagContainer>
                  <TagBox>{detail.product_brand}</TagBox>
                  <TagBox>{detail.product_taste}</TagBox>
                  <TagBox>{detail.product_type}</TagBox>
                </TagContainer>
                <PostContent>{detail.post_content}</PostContent>
              </div>
            </PostBox>
          </PostInner>
        </>
      )}
    </>
  );
};

export default DetailedPost;
