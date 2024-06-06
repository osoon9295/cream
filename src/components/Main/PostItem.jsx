import React, { useEffect, useState } from 'react';
import { IoBookmarkOutline, IoHeartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { checkSignIn, getUser } from '../../api/api.auth';
import supabase from '../../supabase';

const StPostItem = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0 0 20px 0;
`;

const StImage = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 5%;
  cursor: pointer;

  /* @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  } */
`;

const StIdAndLikeButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5% 0 0 0;
`;

const StPostUserId = styled(Link)`
  font-size: 130%;
  color: #484848;

  @media screen and (max-width: 600px) {
    font-size: 90%;
  }
`;

const StLikeButton = styled.button``;

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
  font-size: 80%;
  width: 100%;
  height: 200%;
  padding: 3% 0;
`;

const StPostContent = styled.p`
  height: 25px;
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #7e7e7e;

  @media screen and (max-width: 600px) {
    font-size: 50%;
  }
`;

const StPostDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  color: #d0d0d0;
  @media screen and (max-width: 600px) {
    font-size: 50%;
  }
`;

const PostItem = ({ post }) => {
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
      <Link to="/detailed">
        <StImage src={product_imageSrc} alt={product_name} />
      </Link>
      <StIdAndLikeButtons>
        <StPostUserId to="/detailed">{product_name}</StPostUserId>
        <StPopularity>
          <StLikeButton onClick={handleHeartUp}>{heartChk ? <p>ㅁ</p> : <IoHeartOutline />}</StLikeButton>
          {popularityNum}
          <IoBookmarkOutline color={saveChk ? 'red' : 'yellow'} size={27} onClick={handleSaveUp} />
        </StPopularity>
      </StIdAndLikeButtons>
      <StPostContentWrapper>
        <StPostContent>{post_content}</StPostContent>
      </StPostContentWrapper>
      <StPostDate>{createDate}</StPostDate>
    </StPostItem>
  );
};

export default PostItem;
