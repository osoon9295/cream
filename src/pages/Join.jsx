import React from 'react';
import styled from 'styled-components';
import { signUp } from '../api/api.auth';
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
  color: #000000;
  background-color: #e8e8e8;
  cursor: pointer;
`;

const handleSubmit = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const pw = e.target.pw.value;
  const pwChk = e.target.pwChk.value;
  const name = e.target.name.value;

  if (pw !== pwChk) {
    console.log('비밀번호가 일치하지 않음');
    return;
  }

  await signUp(email, pw, name);
};

export default function Join() {
  return (
    <S.AuthForm onSubmit={handleSubmit} method="post">
      <h1>회원가입</h1>
      <InputImage />
      <Input isRequired={true} name="email" type="email" placeholder="이메일" />
      <Input isRequired={true} name="pw" type="password" placeholder="비밀번호" />
      <Input isRequired={true} name="pwChk" type="password" placeholder="비밀번호 확인" />
      <Input isRequired={true} name="name" placeholder="닉네임" />
      <StyleSubmit type="submit" value="회원가입" />
      <StyleLink>로그인</StyleLink>
    </S.AuthForm>
  );
}
