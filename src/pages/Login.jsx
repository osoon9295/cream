import React from 'react';
import styled from 'styled-components';
import * as S from '../styles/Auth.styled';
import Input from './../components/Input';

const StyleBtns = styled.div`
  max-width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  row-gap: 0.5rem;
`;
const StyleSubmit = styled.input`
  border: 0;
  width: 100%;
  border-radius: 0.375rem;
  padding: 1rem 0;
  text-align: center;
  color: #ffffff;
  background-color: #000000;
  cursor: pointer;
`;
const StyleLink = styled.button`
  border: 0;
  width: 100%;
  border-radius: 0.375rem;
  padding: 1rem 0;
  text-align: center;
  color: #000000;
  background-color: #99ff89;
  cursor: pointer;
`;

export default function Login() {
  return (
    <S.AuthForm>
      <h1>로그인</h1>
      <Input isRequired={true} name="id" placeholder="아이디" />
      <Input isRequired={true} name="pw" placeholder="비밀번호" />
      <StyleBtns>
        <StyleSubmit type="submit" value="로그인" />
        <StyleLink>회원가입</StyleLink>
      </StyleBtns>
    </S.AuthForm>
  );
}
