import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import InputImage from '../components/InputImage';
import Input from '../components/Input';
import { getUser } from '../api/api.auth';
import { apiImg } from '../api/api.img';
import supabase from '../api/api.supabase';
import * as S from '../styles/Auth.styled';

const ProfileEdit = ({ user, setUser }) => {
  const navigate = useNavigate();
  const nicknameRef = useRef(null);
  const [profileImg, setProfileImg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      if (userData) {
        setUser(userData);
        setProfileImg(userData.user_metadata.imageSrc);
        nicknameRef.current ? (nicknameRef.current.value = userData.user_metadata.nickname) : '';
      } else {
        console.error('회원정보를 불러오지 못했습니다.', error);
      }
    };
    fetchData();
  }, []);

  const handleUpdateData = async (e) => {
    e.preventDefault();
    try {
      const newNickname = nicknameRef.current.value;
      const image = e.target.image.files[0];
      const userData = await getUser();
      const ImageData = await apiImg(image);

      const { data: authData, error: AuthError } = await supabase.auth.updateUser({
        data: { nickname: newNickname, imageSrc: ImageData }
      });
      setUser(authData);
      if (AuthError) {
        console.error('Auth 업데이트 실패', error.message);
      }
      console.log('Auth 업데이트 성공', authData);

      const { data, error } = await supabase
        .from('member')
        .update({ user_name: newNickname, user_imageSrc: ImageData })
        .eq('user_id', userData.email)
        .select('*');

      if (error) {
        console.error('member 업데이트 실패', error.message);
        return;
      }

      console.log('member 업데이트 성공', data);
      navigate(-1);
    } catch (error) {
      console.error('업데이트 실패', error);
    }
  };

  // const handleUpdateData = async (e) => {
  //   e.preventDefault();
  //   const image = e.target.image.files[0];
  //   try {
  //     const ImageData = await apiImg(image);
  //     console.log('ImageData', ImageData);
  //     const newNickname = nicknameRef.current.value;

  //     const { data, error } = await supabase.auth.updateUser({
  //       data: { nickname: newNickname, imageSrc: ImageData }
  //     });
  //     if (error) {
  //       console.error('supabase 업데이트 실패', error.message);
  //       return;
  //     }
  //     navigate(-1);
  //   } catch (error) {
  //     console.error('업데이트 실패', error);
  //   }
  // };

  return (
    <>
      <StyleWrap>
        <Title>프로필 관리</Title>
        <S.AuthForm onSubmit={handleUpdateData} style={{ rowGap: '0', width: '100%', padding: '0' }}>
          <InputImage image={profileImg} name="image" />
          <EditList>
            <Label htmlFor="profileid">아이디</Label>
            <Id>{user.email}</Id>
          </EditList>

          <EditList>
            <Label htmlFor="nickname">닉네임</Label>
            <Input inputRef={nicknameRef} isRequired={true} name="name" id="nickname" />
          </EditList>

          <StyleBtns>
            <StyleEdit type="submit">변경</StyleEdit>
            <StyleCancle onClick={() => navigate('/mypage')}>취소</StyleCancle>
          </StyleBtns>
        </S.AuthForm>
      </StyleWrap>
    </>
  );
};

export default ProfileEdit;

const StyleWrap = styled.div`
  max-width: 1240px;
  height: auto;
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 3rem;
`;

const EditList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 0;
  width: 100%;
  border-top: 1px solid var(--default-color);
`;

const Label = styled.label`
  width: 120px;
`;

const StyleBtns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  margin-top: 15px;
`;

const StyleEdit = styled.button`
  background: #000;
  color: #fff;
  padding: 10px 30px;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`;
const StyleCancle = styled.button`
  border: 1px solid var(--border-color);
  background: none;
  color: var(--font);
  padding: 10px 30px;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const ProfileEditWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`;

const Id = styled.p`
  width: 100%;
`;
