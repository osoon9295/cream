import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import InputImage from '../components/InputImage';
import Input from '../components/Input';
import { getUser } from '../api/api.auth';
import supabase from '../api/api.supabase';

const ProfileEdit = ({ user, setUser }) => {
  const navigate = useNavigate();
  const nicknameRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      if (userData) {
        setUser(userData);
        nicknameRef.current ? (nicknameRef.current.value = userData.user_metadata.nickname) : '';
      } else {
        console.log('Error');
      }
    };
    fetchData();
  }, []);

  const handleUpdateNickname = async () => {
    try {
      const newNickname = nicknameRef.current.value;
      const updatedUserData = {
        ...user,
        user_metadata: { ...user.user_metadata, nickname: newNickname }
      };
      setUser(updatedUserData);
      console.log('수정후', updatedUserData);

      const { data, error } = await supabase
        .from('member')
        .update({ user_metadata: updatedUserData.user_metadata })
        .eq('id', user.id);
      if (error) {
        console.error('supabase 업데이트 실패', error.message);
        return;
      }
      navigate(-1);
    } catch (error) {
      console.error('닉네임 업데이트 실패', error);
    }
  };

  return (
    <>
      <StyleWrap>
        <Title>프로필 관리</Title>
        <ProfileEditWrap>
          <InputImage />
          <EditList>
            <Label htmlFor="profileid">아이디</Label>
            <Id>{user.email}</Id>
          </EditList>

          <EditList>
            <Label htmlFor="nickname">닉네임</Label>
            <Input inputRef={nicknameRef} isRequired={true} name="name" id="nickname" />
          </EditList>

          <StyleBtns>
            <StyleEdit onClick={handleUpdateNickname}>변경</StyleEdit>
            <StyleCancle onClick={() => navigate(-1)}>취소</StyleCancle>
          </StyleBtns>
        </ProfileEditWrap>
      </StyleWrap>
    </>
  );
};

export default ProfileEdit;

const StyleWrap = styled.div`
  max-width: 1240px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-top: 5rem;
`;

const EditList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 0;
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
  margin-top: 30px;
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
