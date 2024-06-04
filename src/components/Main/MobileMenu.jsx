import { GoHome, GoSearch, GoBookmark, GoPerson } from 'react-icons/go';
import React from 'react';
import styled from 'styled-components';

const StMobileNav = styled.ul`
  display: flex;
  justify-content: center;
  gap: 134px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 16px 66px;
  border-top: 1px solid #cfcfcf;
  box-sizing: border-box;
  background-color: #fff;

  @media (min-width: 1120px) {
    display: none;
  }

  li {
    text-align: center;
    font-size: 12px;
  }

  span {
    display: block;
    color: #9a9a9a;
    margin-top: 3px;
  }

  @media (max-width: 768px) {
    gap: calc(134px * 0.5);
    padding: calc(16px * 0.5) calc(66px * 0.5);
  }

  @media (max-width: 480px) {
    gap: calc(134px * 0.3);
    padding: calc(16px * 0.3) calc(66px * 0.3);
  }
`;

const MobileMenu = () => {
  return (
    <StMobileNav>
      <li>
        <GoHome size="40" />
        <span>HOME</span>
      </li>
      <li>
        <GoSearch size="40" />
        <span>PRODUCT</span>
      </li>
      <li>
        <GoBookmark size="40" />
        <span>SAVED</span>
      </li>
      <li>
        <GoPerson size="40" />
        <span>MY</span>
      </li>
    </StMobileNav>
  );
};

export default MobileMenu;
