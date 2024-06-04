import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import WrittenPost from './../components/WrittenPost';
import supabase from '../supabase';

const MyPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [profileUrl, setProfileUrl] = useState(''); //프로필 이미지

  async function getUser() {
    const textEmail = 'ly0608@naver.com';
    // const { data, error } = await supabase.auth.getSession();
    // if (error) {
    //   return false;
    // }
    // console.log('data', data);
    // return data;

    const { data, error } = await supabase.from('member').select('*').eq('user_id', textEmail);
    if (error) {
      console.error('Error fetching member', error);
    } else {
      setUser(data);
    }
  }

  async function getProfileImg() {
    const { data } = supabase.storage.from('avatars').getPublicUrl('default-profile.png');
    setProfileUrl(data);
  }

  //function handleFileInputChange(files) {}

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <StyleWrap>
        <Title>마이페이지</Title>
        <StyleProfileWrap>
          <ProfileImg>{user.length > 0 ? user[0].user_imageSrc : ''}</ProfileImg>
          <StyleProfileName>
            {`🎉 ${user.length > 0 ? user[0].user_name : ''}님 환영합니다.`}{' '}
            <ProfileEmail>{user.length > 0 ? user[0].user_id : ''}</ProfileEmail>
          </StyleProfileName>
          <StyleProfileBtn onClick={() => navigate(`profile-edit`)}>프로필 관리</StyleProfileBtn>
        </StyleProfileWrap>

        <StyleTotalWrap>
          <div>
            게시글<Count>{`3`}</Count>
          </div>
          <div>
            좋아요<Count>{`2`}</Count>
          </div>
          <div>
            북마크<Count>{`0`}</Count>
          </div>
        </StyleTotalWrap>

        <StylePostWrap>
          <div>
            <StylePostTitle>✏️ 내가 쓴 게시글</StylePostTitle>
          </div>

          <div>
            <StylePostTitle>💜 좋아요</StylePostTitle>
            <WrittenPost />
          </div>

          <div>
            <StylePostTitle>📌 북마크</StylePostTitle>
            <WrittenPost />
          </div>
        </StylePostWrap>
      </StyleWrap>
    </>
  );
};

export default MyPage;

const StyleWrap = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 20px;

  @media screen and (max-width: 500px) {
    padding: 0 20px;
    gap: 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  margin: 3rem 0;

  @media screen and (max-width: 500px) {
    margin: 2rem 0 1rem;
    font-size: 20px;
  }
`;

const StyleProfileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 50px 50px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px 30px;
  }
`;

const ProfileImg = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background: #ddd;
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

const StyleProfileName = styled.p`
  flex: auto;
  font-size: 18px;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const StyleProfileBtn = styled.button`
  background: none;
  border: 1px solid var(--border-color);
  color: #2e2e2e;
  padding: 10px 15px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const StyleTotalWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  background-color: var(--sub-color);
  padding: 50px 50px;
  text-align: center;

  @media screen and (max-width: 500px) {
    padding: 20px 30px;
    font-size: 14px;
  }
`;

const Count = styled.p`
  display: block;
  margin-top: 10px;
  font-weight: 600;
`;

const StylePostWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin-top: 5rem;
  @media screen and (max-width: 500px) {
    gap: 3rem;
    margin-top: 3rem;
  }
`;

const StylePostTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--default-color);
    display: block;
    margin: 15px 0;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const ProfileEmail = styled.span`
  display: block;
  font-size: 14px;
  margin-top: 10px;
  color: var(--font);

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
