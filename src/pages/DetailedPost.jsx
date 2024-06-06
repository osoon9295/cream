import React, { useEffect, useState } from 'react';
import supabase from '../supabase';
import { deletePost } from '../store/slices/postSlice';
import { useNavigate } from 'react-router-dom';
import usePosts from '../customHook/usePosts';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { TagBox } from '../components/post/Tag';
import { checkSignIn } from '../api/api.auth';
import { IoBookmarkOutline, IoHeartOutline, IoHeart, IoBookmark } from 'react-icons/io5';

const PostInner = styled.div`
  max-width: 1240px;
  width: 70vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostTitle = styled.div`
  max-width: 1240px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 8%;
  padding-left: 18.5%;
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
  box-sizing: border-box;
  color: #c0c0c0;
  padding: 0 2px;
  cursor: pointer;
  &:hover {
    color: black;
  }
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
  padding-left: 10%;
  padding-bottom: 10px;
`;

const ProfileImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #efefef;
  margin-right: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
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
  gap: 11%;
  flex-wrap: wrap;
  margin: 5% 0;
`;

const PostImg = styled.div`
  width: 17rem;
  aspect-ratio: 1.5 / 2;
  border-radius: 10%;
  background-color: #efefef;
  overflow: hidden;
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;

const TagContainer = styled.div`
  width: 20rem;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
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
  const [userInfo, setUserInfo] = useState('');
  const [isSignIn, setIsSignIn] = useState(false);

  const posts = useSelector((state) => state.postList);

  const onDeletePost = async (id) => {
    const { data, error } = await supabase.from('posts').delete().eq('id', id);
    if (error) {
      console.log('error =>', error);
    } else {
      console.log('data =>', data);
      dispatch(deletePost(id));
    }
  };

  const postId = '7c75a64d-8238-277e-b7a7-ac6d50c20bcd';

  // const postId = '6a9f75d4-0586-6dcd-8f2f-c16c675f4499';

  let detail = null;
  let date = '';
  let user = '';

  const fetchMembers = async (user) => {
    const { data, error } = await supabase.from('member').select('*').eq('user_id', user);
    console.log(data);
    if (error) {
      console.log('error =>', error);
    } else {
      console.log('data =>', data);
      console.log(user);
      setUserInfo(data[0]);
    }
  };

  if (isSuccess) {
    detail = posts.filter((post) => post.id === postId)[0];
    date = detail.created_at.split('T')[0];
    user = detail.user_id;
  }

  useEffect(() => {
    (async () => {
      const sign = await checkSignIn();
      setIsSignIn(sign);
    })();
  }, []);

  useEffect(() => {
    fetchMembers(user);
  }, [user]);

  return (
    <>
      {isSuccess && userInfo && (
        <>
          <PostTitle>
            {detail.product_name}
            <div style={{ display: 'flex', marginLeft: '45%' }}>
              <StButton
                style={{ display: isSignIn ? 'block' : 'none' }}
                onClick={() => {
                  navigate('/modifyPost');
                }}
              >
                수정
              </StButton>
              <StButton
                style={{ borderColor: 'transparent', display: isSignIn ? 'block' : 'none' }}
                onClick={() => {
                  onDeletePost(detail.id);
                }}
              >
                삭제
              </StButton>
            </div>
          </PostTitle>
          <PostInner>
            <PostInfo>
              <ProfileImg>
                <img
                  src={userInfo.user_imageSrc ? userInfo.user_imageSrc : '/public/img/default-img.png'}
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </ProfileImg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {userInfo.user_name}
                <PostDate>{date}</PostDate>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginLeft: '63%' }}>
                {/* <IoHeart style={{ fontSize: '23px', cursor: 'pointer', color: 'red' }} /> */}
                <IoHeartOutline style={{ fontSize: '23px', cursor: 'pointer', color: 'red' }} />
                <IoBookmark style={{ fontSize: '22px', cursor: 'pointer', color: 'grey' }} />
                {/* <IoBookmarkOutline style={{ fontSize: '22px', cursor: 'pointer', color: 'grey' }} /> */}
              </div>
            </PostInfo>
            <PostBox>
              <PostImg>
                <img
                  src={detail.product_imageSrc ? detail.product_imageSrc : '/public/img/default-img.png'}
                  style={{ height: '100%', objectFit: 'cover' }}
                />
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
