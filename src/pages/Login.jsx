import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { checkSignIn, signIn } from '../api/api.auth';
import { fetchUser } from '../store/slices/authSlice';
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

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pw = e.target.pw.value;

    await signIn(email, pw);
    const logInChk = await checkSignIn();
    if (logInChk) {
      alert('로그인 되었습니다.');
      dispatch(fetchUser());
      navigate('/');
    } else {
      alert('비밀번호나 아이디가 틀렸습니다.');
    }
  };

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
