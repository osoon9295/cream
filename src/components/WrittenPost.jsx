import React from 'react';
import usePosts from '../customHook/usePosts';
import styled from 'styled-components';
import { IoHeart } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { GoPencil } from 'react-icons/go';
import { IoCloseOutline } from 'react-icons/io5';

const WrittenPost = ({ posts, handleDeleteData }) => {
  usePosts();
  const navigate = useNavigate();

  return (
    <>
      <PostWrap>
        {posts.map((post) => {
          return (
            <PostList key={post.id}>
              <ImgWrap>
                <PostImg src={post.product_imageSrc} />
              </ImgWrap>
              <ContentWrap>
                <PostTitleWrap>
                  <PostTitle>{post.product_name}</PostTitle>
                </PostTitleWrap>
                <PostComment>{post.post_content}</PostComment>
                <PostHeart>
                  <IoHeart style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                  {post.popularity}
                </PostHeart>
              </ContentWrap>

              <PostDate>{post.created_at.slice(0, 10)}</PostDate>

              <EditBtns>
                <GoPencil
                  onClick={() => navigate(`/modifyPost/${post.id}`)}
                  style={{ marginRight: '10px', cursor: 'pointer' }}
                />
                <IoCloseOutline onClick={() => handleDeleteData(post.id)} style={{ cursor: 'pointer' }} />
              </EditBtns>
            </PostList>
          );
        })}
      </PostWrap>
    </>
  );
};

export default WrittenPost;

const PostWrap = styled.ul`
  display: flex;
  gap: 30px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 400px) and (max-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 320px) and (max-width: 400px) {
    flex-direction: row;
  }
`;
const PostList = styled.li`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid var(--border-color);
  padding: 0px 0 30px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 400px) and (max-width: 750px) {
    width: calc(50% - 15px);
    flex-direction: column;
    border: none;
    padding: 0;
  }
  @media screen and (min-width: 320px) and (max-width: 400px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PostImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const ImgWrap = styled.div`
  width: 12rem;
  height: 12rem;
  position: relative;
  margin-right: 20px;
  @media screen and (min-width: 600px) and (max-width: 800px) {
    height: 11rem;
  }
  @media screen and (min-width: 500px) and (max-width: 750px) {
    width: 100%;
    height: 14rem;
    margin: 0;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 11rem;
    margin: 0;
  }
`;

const ContentWrap = styled.div`
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 60%;
  @media screen and (min-width: 320px) and (max-width: 750px) {
    padding: 12px 0;
    width: 100%;
  }
`;

const PostTitleWrap = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 320px) and (max-width: 640px) {
    margin-bottom: 10px;
  }
`;

const PostTitle = styled.h2`
  font-weight: 600;
  font-size: 1.1rem;
  @media screen and (min-width: 320px) and (max-width: 640px) {
    font-size: 1rem;
  }
`;

const PostComment = styled.p`
  font-size: 0.9rem;
  line-height: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (min-width: 320px) and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const EditBtns = styled.div`
  color: #999999;
  @media screen and (min-width: 320px) and (max-width: 750px) {
    width: 100%;
    margin: 0;
    text-align: right;
  }
`;

const PostDate = styled.p`
  margin-right: 3rem;
  font-size: 0.9rem;
  color: #999999;
  text-align: center;
  @media screen and (min-width: 320px) and (max-width: 750px) {
    width: 100%;
    margin: 0;
    text-align: left;
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  color: #999999;
  cursor: pointer;
`;

const PostHeart = styled.p`
  color: #999999;
  font-size: 0.9rem;
  margin-top: 10px;
`;
