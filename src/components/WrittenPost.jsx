import React from 'react';
import usePosts from '../customHook/usePosts';
import styled from 'styled-components';
import { IoHeart } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

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
                <Button onClick={() => navigate(`/modifyPost/${post.id}`)}>수정</Button>|
                <Button onClick={() => handleDeleteData(post.id)}>삭제</Button>
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
  justify-content: flex-start;
`;
const PostList = styled.li`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid var(--border-color);
  overflow: hidden;
  padding: 0px 0 30px;
  align-items: center;
  justify-content: space-between;
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
`;

const ContentWrap = styled.div`
  padding: 10px;
  flex: auto;
`;

const PostTitleWrap = styled.div`
  margin-bottom: 20px;
`;

const PostTitle = styled.h2`
  font-weight: 600;
  font-size: 1.1rem;
`;

const PostComment = styled.p`
  font-size: 0.9rem;
`;

const EditBtns = styled.div`
  color: #999999;
`;

const PostDate = styled.p`
  margin-right: 3rem;
  font-size: 0.9rem;
  color: #999999;
  text-align: center;
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
