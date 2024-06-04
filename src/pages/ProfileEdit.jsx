import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import InputImage from '../components/InputImage';
import Input from '../components/Input';
import { getUser } from '../api/api.auth';

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const nicknameRef = useRef(null);
  const pwdRef = useRef(null);

  const handleUpdateNickname = async () => {
    const newNickname = nicknameRef.current.value;
    const updateNickname = {
      nickname: newNickname
    };

    if (updateNickname) {
      setUser(updateNickname);
    } else {
      console.log('Error nickname update');
    }

    console.log('user', user);
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      if (userData) {
        setUser(userData);
        nicknameRef.current ? (nicknameRef.current.value = userData.user_metadata.nickname) : '';
        pwdRef.current ? (pwdRef.current.value = userData.user_pwd) : '';
      } else {
        console.log('Error');
      }
    };
    fetchData();
  }, []);

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

          <EditList>
            <Label htmlFor="pwd">비밀번호</Label>
            <Input inputRef={pwdRef} isRequired={true} type="password" name="pwChk" id="pwd" />
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
