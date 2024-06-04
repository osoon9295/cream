import React, { useState } from 'react';

import styled from 'styled-components';
import { FaCrown, FaIceCream } from 'react-icons/fa';
import { GiSpoon } from 'react-icons/gi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { PiEqualsBold } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../store/slices/categorySlice';

const StPcCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: calc((100vh - 640px) / 2);
  width: 138px;
  padding: 45px 37px;
  gap: 50px;
  border-radius: 30px;
  background-color: #d5e0fc;
  box-sizing: border-box;
  z-index: 1;
  transform: ${(props) => (props.$isOn ? 'translateX(0%)' : 'translateX(-100%)')};
  transition: transform 0.5s ease-in;

  /* @media (max-height: 1024px) {
    
  } */

  @media (max-height: 1024px) and (max-width: 1440px) {
    width: 100px;
    padding: 20px 11px;
    gap: 15px;
    border-radius: 25px;
    top: calc((100vh - 407px) / 2);
  }

  svg {
    @media (max-height: 1024px) and (max-width: 1440px) {
      width: 45px;
    }
  }
`;

const StPcCategoryUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-bottom: 40px;

  @media (max-height: 1024px) and (max-width: 1440px) {
    gap: 21px;
  }

  li {
    text-align: center;
    letter-spacing: 1px;

    button {
      border: transparent;
      background-color: transparent;
      cursor: pointer;
      color: #a0abc9;

      svg {
        @media (max-height: 1024px) and (max-width: 1440px) {
          width: 35px;
        }
      }
    }

    button.active {
      color: #fff;
    }

    span {
      display: block;
      margin-top: 12px;
      font-size: 15px;
      @media (max-height: 1024px) and (max-width: 1440px) {
        margin-top: 0px;
        font-size: 13px;
      }
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
  z-index: 1;

  svg {
    padding-left: 40px;
    @media (max-height: 1024px) and (max-width: 1440px) {
      width: 20px;
      padding-left: 30px;
    }
  }

  @media (max-height: 1024px) and (max-width: 1440px) {
    width: 80px;
    height: 80px;
    left: 60px;
    top: 163px;
  }
`;

const PcCategory = () => {
  const dispatch = useDispatch();
  const [isOn, setIsOn] = useState(false);
  const [activeState, setActiveState] = useState([false, false, false]);
  const iconBtn = [
    {
      icon: <FaCrown size="56" />,
      category: 'brand',
      text: '브랜드별'
    },
    {
      icon: <GiSpoon size="56" />,
      category: 'flavor',
      text: '맛별'
    },
    {
      icon: <FaIceCream size="56" />,
      category: 'type',
      text: '콘/바/컵'
    }
  ];
  const pcToggleHandler = () => {
    setIsOn(!isOn);
  };

  /* 문제점
     - activeState와 categorySlice가 따로 관리된다.
  */
  const onClickHandler = (index, category) => {
    const newState = activeState.map((state, stateIndex) => {
      if (index === stateIndex) {
        return !state;
      }
      return false;
    });
    setActiveState(newState);
    // [false, false, false]
    // { category: '', subCategory: '' };
    const FalseState = newState.every((currentState) => {
      return currentState === false;
    });
    if (FalseState) {
      dispatch(setCategory(''));
    } else {
      dispatch(setCategory(category));
    }
  };
  // console.log(iconElement);
  return (
    <StPcCategory $isOn={isOn}>
      <PiEqualsBold size="56" color="#fff" />
      <StPcCategoryUl>
        {iconBtn.map((item, index) => {
          return (
            <li key={item.category}>
              <button
                className={activeState[index] ? 'active' : ''}
                onClick={() => {
                  onClickHandler(index, item.category);
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            </li>
          );
        })}
      </StPcCategoryUl>
      <StPcCategoryToggle onClick={pcToggleHandler}>
        {isOn ? <FaAngleLeft size="36" color="#FFF" /> : <FaAngleRight size="36" color="#FFF" />}
      </StPcCategoryToggle>
    </StPcCategory>
  );
};

export default PcCategory;
