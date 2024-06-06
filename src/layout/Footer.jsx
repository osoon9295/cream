import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import styled from 'styled-components';

export default function Footer() {
  return (
    <>
      <FooterWrap>
        <InnerWrap>
          <Logo>
            <a href="/">
              <Img src="/public/img/default-logo.png" alt="크림로고" />
            </a>
          </Logo>
          <a href="https://github.com/osoon9295/cream" style={{ color: '#BDBDBD' }}>
            <IoLogoGithub style={{ verticalAlign: 'middle' }} /> github.com
          </a>
        </InnerWrap>
      </FooterWrap>
    </>
  );
}

const FooterWrap = styled.div`
  width: 100%;
  border-top: 1px solid var(--border-color);

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

const InnerWrap = styled.div`
  max-width: 1240px;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 500px) and (max-width: 1240px) {
    padding: 0 20px;
  }
`;

const Logo = styled.h1`
  width: 7rem;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 100%;
`;
