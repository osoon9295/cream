import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUser, signIn } from '../api/api.auth';
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
const StyleLink = styled(Link)`
  text-decoration: none;
  border: 0;
  width: 100%;
  border-radius: 0.375rem;
  padding: 1rem 0;
  text-align: center;
  color: #000000;
  background-color: #99ff89;
  cursor: pointer;
`;

const handleSubmit = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const pw = e.target.pw.value;

  await signIn(email, pw);
  await getUser();
  console.log('wad');
};

export default function Login() {
  return (
    <S.AuthForm onSubmit={handleSubmit} method="post">
      <h1>로그인</h1>
      <Input isRequired={true} name="email" type="email" placeholder="아이디" />
      <Input isRequired={true} name="pw" type="password" placeholder="비밀번호" />
      <StyleBtns>
        <StyleSubmit type="submit" value="로그인" />
        <StyleLink to="/join">회원가입</StyleLink>
      </StyleBtns>
    </S.AuthForm>
  );
}
