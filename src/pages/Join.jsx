import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { checkEmailDuplicate, checkNicknameDuplicate, signUp } from '../api/api.auth';
import Input from '../components/Input';
import InputImage from '../components/InputImage';
import * as S from '../styles/Auth.styled';
import MobileMenu from '../layout/MobileMenu';

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

const StyleLink = styled(Link)`
  border: 0;
  width: 100%;
  border-radius: 0.375rem;
  padding: 1rem 0;
  text-align: center;
  color: #000000;
  background-color: #e8e8e8;
  cursor: pointer;
  text-decoration: none;
`;

export default function Join() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pw = e.target.pw.value;
    const pwChk = e.target.pwChk.value;
    const name = e.target.name.value;
    const image = e.target.image.files[0];

    if (pw !== pwChk) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (pw.length < 6) {
      alert('비밀번호는 6자 이상이어야 합니다.');
      return;
    }

    const emailExists = await checkEmailDuplicate(email);
    if (emailExists) {
      alert('이미 사용 중인 이메일입니다.');
      return;
    }

    const nicknameExists = await checkNicknameDuplicate(name);
    if (nicknameExists) {
      alert('이미 사용 중인 닉네임입니다.');
      return;
    }

    signUp(email, pw, name, image);
  };

  return (
    <S.AuthForm onSubmit={handleSubmit} method="post">
      <h1>회원가입</h1>
      <InputImage />
      <Input isRequired={true} name="email" type="email" placeholder="이메일" />
      <Input isRequired={true} name="pw" type="password" placeholder="비밀번호" />
      <Input isRequired={true} name="pwChk" type="password" placeholder="비밀번호 확인" />
      <Input isRequired={true} name="name" placeholder="닉네임" />
      <StyleSubmit type="submit" value="회원가입" />
      <StyleLink to="/login">로그인</StyleLink>
      <MobileMenu />
    </S.AuthForm>
  );
}
