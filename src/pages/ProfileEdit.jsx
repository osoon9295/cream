import React from 'react';
import styled from 'styled-components';
import InputImage from '../components/InputImage';
import Input from './../components/Input';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyleWrap>
        <Title>프로필 관리</Title>
        <ProfileEditWrap>
          <InputImage />
          <EditList>
            <Label htmlFor="profileid">아이디</Label>
            wnswns722
          </EditList>

          <EditList>
            <Label htmlFor="nickname">닉네임</Label>
            <Input isRequired={true} name="name" id="nickname" placeholder="닉네임" />
          </EditList>

          <EditList>
            <Label htmlFor="password">비밀번호</Label>
            <Input isRequired={true} name="pwChk" id="password" placeholder="비밀번호 확인" />
          </EditList>

          <StyleBtns>
            <StyleEdit>변경</StyleEdit>
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
