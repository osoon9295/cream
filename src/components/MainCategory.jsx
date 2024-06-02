import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCrown, FaIceCream, FaHeart } from 'react-icons/fa';
import { GiSpoon } from 'react-icons/gi';
import { PiEqualsBold } from 'react-icons/pi';
import { FaAngleLeft } from 'react-icons/fa6';
import { GoHome, GoSearch, GoBookmark, GoPerson } from 'react-icons/go';
const StMobileCategory = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 68px;
  padding: 18px 0;
  background-color: #d5e0fc;
  button {
    font-size: 20px;
    border: transparent;
    background-color: transparent;
    cursor: pointer;
    color: #969696;
  }
`;
const StMobileNav = styled.ul`
  display: flex;
  justify-content: center;
  gap: 134px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  padding: 16px 66px;
  border-top: 1px solid #cfcfcf;
  box-sizing: border-box;
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
const StPcCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 100px;
  width: 138px;
  padding: 60px 37px;
  gap: 117px;
  border-radius: 30px;
  background-color: #d5e0fc;
  box-sizing: border-box;
`;
const StPcCategoryUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 85px;
  padding-bottom: 107px;
  button {
    border: transparent;
    background-color: transparent;
    cursor: pointer;
  }
  li {
    text-align: center;
    font-size: 15px;
    letter-spacing: 1px;
    span {
      display: block;
      margin-top: 12px;
      color: #a0abc9;
    }
  }
`;
const StPcCategoryToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 79px;
  top: 397px;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  border-color: transparent;
  background-color: #d5e0fc;
  z-index: -1;
`;
const MainCategory = () => {
  const [pcActiveIcon, setPcActiveIcon] = useState(false);
  const PcCategoryIconClick = () => {
    setPcActiveIcon(!pcActiveIcon);
  };
  const [pcIconColor, setPcIconColor] = useState('#A0ABC9');
  return (
    <>
      <StMobileCategory>
        {/* active 글자색 변경 넣어야함 */}
        <li>
          <button>브랜드별</button>
        </li>
        <li>
          <button>맛별</button>
        </li>
        <li>
          <button>콘/바/컵</button>
        </li>
      </StMobileCategory>
      <StPcCategory>
        {/* active 아이콘 컬러 변경 넣어야함 */}
        <PiEqualsBold size="56" color="#fff" />
        <StPcCategoryUl>
          <li>
            <button onClick={() => {}}>
              {/* {pcActiveIcon ===  ? (
                <FaCrown size="56" style={{ color: '#FFF' }} />
              ) : (
                <FaCrown size="56" style={{ color: '#A0ABC9' }} />
              )} */}
              <span>브랜드별</span>
            </button>
          </li>
          <li>
            <button onClick={() => PcCategoryIconClick()}>
              {pcActiveIcon ? (
                <GiSpoon size="56" style={{ color: '#FFF' }} />
              ) : (
                <GiSpoon size="56" style={{ color: '#A0ABC9' }} />
              )}
              <span>맛별</span>
            </button>
          </li>
          <li>
            <button onClick={() => PcCategoryIconClick()}>
              {pcActiveIcon === FaIceCream ? (
                <FaIceCream size="56" style={{ color: '#FFF' }} />
              ) : (
                <FaIceCream size="56" style={{ color: '#A0ABC9' }} />
              )}
              <span>콘/바/컵</span>
            </button>
          </li>
          <li>
            <button onClick={() => PcCategoryIconClick('')}>
              {pcActiveIcon ? (
                <FaHeart size="56" style={{ color: '#FFF' }} />
              ) : (
                <FaHeart size="56" style={{ color: '#A0ABC9' }} />
              )}
              <span>좋아요</span>
            </button>
          </li>
        </StPcCategoryUl>
        <StPcCategoryToggle>
          <FaAngleLeft size="36" color="#FFF" style={{ paddingLeft: '40px' }} />
          {/* <FaAngleRight /> */}
        </StPcCategoryToggle>
      </StPcCategory>
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
    </>
  );
};
export default MainCategory;
