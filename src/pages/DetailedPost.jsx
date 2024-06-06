import React, { useEffect, useState } from 'react';
import supabase from '../supabase';
import { deletePost } from '../store/slices/postSlice';
import { useNavigate } from 'react-router-dom';
import usePosts from '../customHook/usePosts';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { TagBox } from '../components/post/Tag';
import { checkSignIn } from '../api/api.auth';
import MobileMenu from '../layout/MobileMenu';
import { GoBookmark, GoBookmarkFill, GoHeart, GoHeartFill } from 'react-icons/go';

const PostInner = styled.div`
  max-width: 1120px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  @media screen and (max-width: 1240px) {
    width: 90%;
  }
`;

const PostTitle = styled.div`
  max-width: 1240px;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 5rem auto 0;
  padding-bottom: 15px;
  font-size: 1.8rem;
  color: var(--font);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--border-color);
  align-items: center;

  @media screen and (max-width: 1240px) {
    padding: 20px;
    margin: 3rem auto 0;
    font-size: 1.3rem;
  }
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
  font-size: 1rem;
  color: #484848;
  display: flex;
  align-items: center;
  margin-top: 3rem;
  padding-bottom: 10px;
  justify-content: center;
`;

const ProfileImg = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #efefef;
  margin-right: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
const Img = styled.img`
  width: 100%;
`;
const PostDate = styled.div`
  width: 6rem;
  color: #c0c0c0;
  font-size: 0.8rem;
`;

const PostBox = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const PostImg = styled.div`
  width: 100%;

  aspect-ratio: 1.5 / 2;
  border-radius: 15px;
  background-color: #efefef;
  overflow: hidden;
  margin-top: 12px;
  display: flex;
  @media screen and (max-width: 600px) {
    height: 22rem;
  }
`;

const TagContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  @media screen and (max-width: 600px) {
    padding: 0 0 15px 0;
  }
`;

const PostContent = styled.div`
  width: 100%;
  font-size: 1rem;
  color: #484848;
  padding: 15px;
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
                <Img
                  src={userInfo.user_imageSrc ? userInfo.user_imageSrc : '/public/img/default-img.png'}
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </ProfileImg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 'auto' }}>
                {userInfo.user_name}
                <PostDate>{date}</PostDate>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                {/* <GoHeart size={22} /> */}
                <GoHeartFill size={22} color="var(--theme-color)" />
                {/* <GoBookmark size={22} /> */}
                <GoBookmarkFill size={22} />
              </div>
            </PostInfo>
            <PostBox>
              <PostImg>
                <img
                  src={detail.product_imageSrc ? detail.product_imageSrc : '/public/img/default-img.png'}
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </PostImg>
              <div style={{ width: '100%' }}>
                <TagContainer>
                  <TagBox>{detail.product_brand}</TagBox>
                  <TagBox>{detail.product_taste}</TagBox>
                  <TagBox>{detail.product_type}</TagBox>
                </TagContainer>
                <PostContent>{detail.post_content}</PostContent>
              </div>
            </PostBox>
          </PostInner>
          <MobileMenu />
        </>
      )}
    </>
  );
};

export default DetailedPost;
