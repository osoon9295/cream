import React, { useState } from 'react';

import styled from 'styled-components';
import { FaCrown, FaIceCream } from 'react-icons/fa';
import { GiSpoon } from 'react-icons/gi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { PiEqualsBold } from 'react-icons/pi';
import CategoryButton from './CategoryButton';

const StPcCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 100px;
  width: 138px;
  padding: 45px 37px;
  gap: 50px;
  border-radius: 30px;
  background-color: #d5e0fc;
  box-sizing: border-box;
`;

const StPcCategoryUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-bottom: 40px;
  li {
    text-align: center;
    font-size: 15px;
    letter-spacing: 1px;

    span {
      display: block;
      margin-top: 12px;
    }

    button {
      border: transparent;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;
const StPcCategoryToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 79px;
  top: 246px;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  border-color: transparent;
  background-color: #d5e0fc;
  cursor: pointer;
  z-index: -1;
`;

const PcCategory = () => {
  const [isOn, setIsOn] = useState(false);
  // const [toggleSlide, setToggleSlide]
  const liArray = [
    {
      id: 1,
      isActive: false,
      icon: <FaCrown size="46" />,
      name: '브랜드별'
    },
    {
      id: 2,
      isActive: false,
      icon: <GiSpoon size="46" />,
      name: '맛별'
    },
    {
      id: 3,
      isActive: false,
      icon: <FaIceCream size="46" />,
      name: '콘/바/컵'
    }
  ];
  const [iconElement, setIconElement] = useState(liArray);
  const PcCategoryIconClick = (iconId) => {
    const clickedElement = iconElement.map((element) => {
      if (element.id === iconId) {
        return { ...element, isActive: true };
      } else {
        return { ...element, isActive: false };
      }
    });
    // 눌렀을때 isActive를 변경해주는 배열,,
    setIconElement(clickedElement);
  };
  const pcToggleHandler = () => {
    setIsOn(!isOn);
    console.log('하이');
  };
  // console.log(iconElement);
  return (
    <StPcCategory>
      {/* active 아이콘 컬러 변경 넣어야함 */}
      <PiEqualsBold size="56" color="#fff" />
      <StPcCategoryUl>
        {iconElement.map((pcIcon) => {
          return (
            <li
              key={pcIcon.id}
              onClick={() => {
                PcCategoryIconClick(pcIcon.id);
              }}
            >
              <CategoryButton isActive={pcIcon.isActive} pcIcon={pcIcon.icon} pcIconName={pcIcon.name} />
            </li>
          );
        })}
      </StPcCategoryUl>
      <StPcCategoryToggle onClick={pcToggleHandler}>
        {isOn ? (
          <FaAngleLeft size="36" color="#FFF" style={{ paddingLeft: '40px' }} />
        ) : (
          <FaAngleRight size="36" color="#FFF" style={{ paddingLeft: '40px' }} />
        )}
      </StPcCategoryToggle>
    </StPcCategory>
  );
};

export default PcCategory;
