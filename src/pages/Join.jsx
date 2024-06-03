import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import InputImage from '../components/InputImage';
import * as S from '../styles/Auth.styled';

const StyleSubmit = styled.input`
  border: 0;
  width: 100%;
  border-radius: 0.375rem;
  padding: 1rem 0;
  text-align: center;
  color: #000000;
  background-color: #99ff89;
  cursor: pointer;
  margin-top: 2rem;
`;

const StyleLink = styled.button`
  border: 0;
  width: 100%;
  border-radius: 0.375rem;
  padding: 1rem 0;
  text-align: center;
  color: #ffffff;
  background-color: #000000;
  cursor: pointer;
`;

export default function Join() {
  return (
    <S.AuthForm>
      <h1>회원가입</h1>
      <InputImage />
      <Input isRequired={true} name="id" placeholder="아이디" />
      <Input isRequired={true} name="pw" placeholder="비밀번호" />
      <Input isRequired={true} name="pwChk" placeholder="비밀번호 확인" />
      <Input isRequired={true} name="name" placeholder="닉네임" />
      <StyleSubmit type="submit" value="회원가입" />
      <StyleLink>로그인</StyleLink>
    </S.AuthForm>
  );
}
