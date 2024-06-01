import React from 'react';
import { FaCrown, FaIceCream, FaHeart } from 'react-icons/fa';
import styled from 'styled-components';
import { GiSpoon } from 'react-icons/gi';
import { PiEqualsBold } from 'react-icons/pi';
import { FaAngleLeft } from 'react-icons/fa6';

const StMobileCategory = styled.ul`
  background-color: #d5e0fc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
  gap: 68px;

  /* gap: 10%; */

  button {
    font-size: 20px;
    border: transparent;
    background-color: transparent;
    cursor: pointer;
    color: #969696;
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
const StPcCategoryToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  position: absolute;
  left: 79px;
  top: 397px;
  background-color: #d5e0fc;
  z-index: -1;
`;
const MainCategory = () => {
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
            <FaCrown size="56" color="#A0ABC9" />
            <span>브랜드별</span>
          </li>
          <li>
            <GiSpoon size="56" color="#A0ABC9" />
            <span>맛별</span>
          </li>
          <li>
            <FaIceCream size="56" color="#A0ABC9" />
            <span>콘/바/컵</span>
          </li>
          <li>
            <FaHeart size="56" color="#A0ABC9" />
            <span>좋아요</span>
          </li>
        </StPcCategoryUl>
        <StPcCategoryToggle>
          <FaAngleLeft size="36" color="#FFF" style={{ paddingLeft: '40px' }} />
          {/* <FaAngleRight /> */}
        </StPcCategoryToggle>
      </StPcCategory>
    </>
  );
};

export default MainCategory;
