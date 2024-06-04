import React from 'react';
import { CiSearch } from 'react-icons/ci';
import styled from 'styled-components';
import { RiHome2Line } from 'react-icons/ri';
import { RiHome2Fill } from 'react-icons/ri';
import { GoBookmark } from 'react-icons/go';
import { GoBookmarkFill } from 'react-icons/go';
import { RiUser3Line } from 'react-icons/ri';
import { RiUser3Fill } from 'react-icons/ri';

export default function Header() {
  return (
    <HeaderWrap>
      <TopAuth>
        <AuthInner>
          <li>
            <a href="/login">로그인</a>
          </li>
          <li>
            <a href="/join">회원가입</a>
          </li>
          <li>
            <a href="/mypage">마이페이지</a>
          </li>
        </AuthInner>
      </TopAuth>

      <InnerWrap>
        <LogoWrap>
          <Logo>
            <a href="/">
              <Img src="/public/img/logo.png" alt="크림로고" />
            </a>
          </Logo>

          <Form>
            <SearchInput type="text" placeholder="제품명을 입력해주세요." />
            <CiSearch style={{ position: 'absolute', right: '15px', cursor: 'pointer' }} />
          </Form>
        </LogoWrap>
      </InnerWrap>

      <MobileMenuWrap>
        <MobileMenu>
          <li>
            <a href="/">
              <RiHome2Fill />
              <MobileTxt>HOME</MobileTxt>
            </a>
          </li>
          <li>
            <a href="">
              <CiSearch />
              <MobileTxt>SEARCH</MobileTxt>
            </a>
          </li>
          <li>
            <a href="/mypage">
              <GoBookmark />
              <MobileTxt>SAVE</MobileTxt>
            </a>
          </li>
          <li>
            <a href="/mypage">
              <RiUser3Line />
              <MobileTxt>MY</MobileTxt>
            </a>
          </li>
        </MobileMenu>
      </MobileMenuWrap>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--default-color);
`;

const InnerWrap = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TopAuth = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid var(--default-color);

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const AuthInner = styled.ul`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: var(--font);
  font-size: 0.7rem;
  gap: 15px;
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center;
  position: relative;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

const Logo = styled.h1`
  width: 7rem;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  border-radius: 50px;
  background: var(--default-color);
  border: none;
  padding: 10px 15px;
  width: 14rem;
`;

const MobileMenuWrap = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    background: #fff;
    z-index: 9;
    border-top: 1px solid var(--border-color);
  }
`;

const MobileMenu = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
`;

const MobileTxt = styled.p`
  font-size: 0.7rem;
`;
