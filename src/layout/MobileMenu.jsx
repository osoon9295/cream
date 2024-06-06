import { GoHome, GoSearch, GoBookmark, GoPerson, GoPencil } from 'react-icons/go';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StMobileNav = styled.ul`
  display: flex;
  justify-content: space-between;
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
    cursor: pointer;

    @media (max-width: 800px) {
      font-size: 9px;
    }
  }

  span {
    display: block;
    color: #9a9a9a;
    margin-top: 3px;
    @media (max-width: 800px) {
      margin: 0;
    }
  }

  svg {
    @media (max-width: 800px) {
      width: 25px;
      height: 25px;
    }
  }
  @media (max-width: 800px) {
    gap: 30px;
    padding: 2px 30px;
  }
`;

const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <StMobileNav>
      <li onClick={() => navigate(`/`)}>
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
      <li onClick={() => navigate(`/mypage`)}>
        <GoPerson size="40" />
        <span>MY</span>
      </li>
      <li onClick={() => navigate(`/createPost`)}>
        <GoPencil size="40" />
        <span>WRITE</span>
      </li>
    </StMobileNav>
  );
};

export default MobileMenu;
