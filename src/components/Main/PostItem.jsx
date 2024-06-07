import React, { useEffect, useState } from 'react';
import { GoBookmark, GoBookmarkFill, GoHeart, GoHeartFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { checkSignIn, getUser } from '../../api/api.auth';
import supabase from '../../supabase';

const StPostItem = styled.div`
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0 0 20px 0;
`;

const StImage = styled.img`
  width: 100%;
  border-radius: 5%;
  cursor: pointer;

  height: 17.5rem;
  @media screen and (max-width: 1240px) {
    height: 15rem;
  }

  @media screen and (min-width: 800px) and (max-width: 1120px) {
    height: 15rem;
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    height: 12rem;
  }

  @media screen and (min-width: 320px) and (max-width: 600px) {
    height: 10rem;
  }

  @media screen and (max-width: 319px) {
    height: 13rem;
  }
`;

const StIdAndLikeButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5% 0 0 0;
  align-items: center;
`;

const StPostUserId = styled(Link)`
  font-size: 130%;
  color: #484848;
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid var(--default-color);
  padding-top: 6px;
  @media screen and (max-width: 600px) {
    font-size: 90%;
  }
`;

const StLikeButton = styled.button`
  border: none;
  background: none;
  padding: 0;
`;

const StPopularity = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 100%;
  color: #484848;

  @media screen and (max-width: 600px) {
    font-size: 100%;
    gap: 1px;
  }
`;

const StPostContentWrapper = styled.div`
  font-size: 0.85rem;
  width: 100%;
  height: 25px;
  padding: 3% 0;
`;

const StPostContent = styled.p`
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #7e7e7e;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const StNickname = styled.p`
  font-size: 0.8rem;
  border-top: 1px solid var(--default-color);
`;

const StPostDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  color: #d0d0d0;
  font-size: 0.8rem;
  padding-top: 5px;
  @media screen and (max-width: 600px) {
    font-size: 50%;
  }
`;
const MainProfileImg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50px;
  border: 1px solid var(--border-color);
  margin-right: 8px;
`;

const ProductImage = styled.div`
  width: 100%;
`;
const PostItem = ({ post, userImg }) => {
  const { id, product_imageSrc, product_name, post_content, popularity, created_at } = post;
  const [popularityNum, setPopularityNum] = useState(popularity);
  const createdAt = created_at;
  const [heartChk, setHeartChk] = useState(false);
  const [saveChk, setSaveChk] = useState(false);

  const createDate = `${createdAt.slice(0, 10)} ${createdAt.slice(11, 19)}`;

  useEffect(() => {
    const fetchUser = async () => {
      let loginChk = await checkSignIn();
      if (!loginChk) return false;
      let user = await getUser();

      const { data: userInfo } = await supabase.from('user_info').select('*').eq('user_id', user.email);
      if (userInfo && userInfo.length > 0) {
        const heart = JSON.parse(userInfo[0].post_heart).find((heartId) => heartId === id);
        const save = JSON.parse(userInfo[0].post_save).find((saveId) => saveId === id);

        heart && setHeartChk(true);
        save && setSaveChk(true);
      }
    };
    fetchUser();
  }, [id]);

  const handleHeartUp = async () => {
    let loginChk = await checkSignIn();
    if (!loginChk) return alert('로그인 후에 이용 가능합니다.');
    let user = await getUser();

    const { data: userInfo } = await supabase.from('user_info').select('*').eq('user_id', user.email);
    if (userInfo && userInfo.length > 0) {
      let heart = JSON.parse(userInfo[0].post_heart);
      if (heartChk) {
        console.log('-');

        const { data, error } = await supabase
          .from('posts')
          .update({
            popularity: popularityNum - 1
          })
          .eq('id', id);
        if (error) {
          console.error('Error updating popularity:', error);
          return;
        }
        heart = heart.filter((heartId) => heartId !== id);
        console.log(heart);

        setPopularityNum((num) => num - 1);
        setHeartChk(false);
      } else {
        heart.push(id);
        console.log(heart);

        const { data, error } = await supabase
          .from('posts')
          .update({
            popularity: popularityNum + 1
          })
          .eq('id', id);
        if (error) {
          console.error('Error updating popularity:', error);
          return;
        }
        setPopularityNum((num) => num + 1);
        setHeartChk(true);
      }

      const { data: hearts, error: heartsError } = await supabase
        .from('user_info')
        .update({ post_heart: JSON.stringify(heart) })
        .eq('user_id', user.email);
      if (heartsError) {
        console.error('Error updating user hearts:', heartsError);
      }
    }
  };

  const handleSaveUp = async () => {
    let loginChk = await checkSignIn();
    if (!loginChk) return alert('로그인 후에 이용 가능합니다.');
    let user = await getUser();

    const { data: userInfo } = await supabase.from('user_info').select('*').eq('user_id', user.email);
    if (userInfo && userInfo.length > 0) {
      let save = JSON.parse(userInfo[0].post_save);
      if (saveChk) {
        save = save.filter((saveId) => saveId !== id);
        setSaveChk(false);
      } else {
        save.push(id);
        setSaveChk(true);
      }

      const { data: saves, error: savesError } = await supabase
        .from('user_info')
        .update({ post_save: JSON.stringify(save) })
        .eq('user_id', user.email);
      if (savesError) {
        console.error('Error updating user saves:', savesError);
      }
    }
  };

  return (
    <StPostItem>
      <ProductImage>
        <Link to={`/detailed/${id}`}>
          <StImage src={product_imageSrc} alt={product_name} />
        </Link>
      </ProductImage>

      <StIdAndLikeButtons>
        <ProductName>{product_name}</ProductName>
        <StPopularity>
          <StLikeButton onClick={handleHeartUp}>
            {heartChk ? <GoHeartFill size={22} color="var(--theme-color)" /> : <GoHeart size={22} />}
          </StLikeButton>
          {popularityNum}
          <StLikeButton onClick={handleSaveUp}>
            {saveChk ? <GoBookmarkFill size={22} /> : <GoBookmark size={22} />}{' '}
          </StLikeButton>
        </StPopularity>
      </StIdAndLikeButtons>
      <StPostContentWrapper>
        <StPostContent>{post_content}</StPostContent>
      </StPostContentWrapper>
      <StPostUserId to={`/detailed/${id}`}>
        <MainProfileImg src={userImg?.user_imageSrc} />
        <StNickname>{userImg?.user_name}</StNickname>
      </StPostUserId>
      <StPostDate>{createDate}</StPostDate>
    </StPostItem>
  );
};

export default PostItem;

const ProductName = styled.p`
  font-size: 1rem;
`;
