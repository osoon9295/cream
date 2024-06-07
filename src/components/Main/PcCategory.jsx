import React, { useState } from 'react';

import styled from 'styled-components';
import { FaCrown, FaIceCream } from 'react-icons/fa';
import { GiSpoon } from 'react-icons/gi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { PiEqualsBold } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../store/slices/categorySlice';

const StPcCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: calc((100vh - 640px) / 2);
  padding: 45px 25px;
  gap: 50px;
  border-radius: 30px;
  background-color: var(--sub-color);
  box-sizing: border-box;
  z-index: 1;
  transform: ${(props) => (props.$isOn ? 'translateX(0%)' : 'translateX(-100%)')};
  transition: transform 0.5s ease-in;

  @media (max-width: 1120px) {
    display: none;
  }

  @media (max-width: 1440px) {
    padding: 20px 15px;
    gap: 15px;
    border-radius: 25px;
    top: calc((100vh - 407px) / 2);
  }
  @media (max-width: 1240px) {
    padding: 0 10px;
    border-radius: 15px;
  }

  svg {
    @media (max-width: 1440px) {
      width: 45px;
    }
    @media (max-width: 1240px) {
      width: 30px;
    }
  }
`;

const StPcCategoryUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-bottom: 40px;

  @media (max-width: 1440px) {
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
        @media (max-width: 1440px) {
          width: 35px;
        }
        @media (max-width: 1240px) {
          width: 25px;
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
      @media (max-width: 1440px) {
        margin-top: 0px;
        font-size: 13px;
      }
      @media (max-width: 1240px) {
        font-size: 11px;
      }
    }
  }
`;
const StPcCategoryToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 22%;
  top: 246px;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  border-color: transparent;
  background-color: #d5e0fc;
  cursor: pointer;
  z-index: -1;
  @media (min-width: 1240px) and (max-width: 1920px) {
    left: 50%;
  }

  svg {
    padding-left: 40px;
    @media (max-width: 1440px) {
      width: 15px;
      padding-left: 30px;
    }
  }

  @media (max-width: 1440px) {
    width: 80px;
    height: 80px;
    left: 50%;
    top: 163px;
  }
  @media (max-width: 1240px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const PcCategory = () => {
  const dispatch = useDispatch();
  const [isOn, setIsOn] = useState(false);
  const [activeState, setActiveState] = useState([false, false, false]);
  const category = useSelector((state) => state.category.category);
  const iconBtn = [
    {
      icon: <FaCrown size="50" />,
      category: 'brand',
      text: '브랜드별'
    },
    {
      icon: <GiSpoon size="50" />,
      category: 'flavor',
      text: '맛별'
    },
    {
      icon: <FaIceCream size="50" />,
      category: 'type',
      text: '콘/바/컵'
    }
  ];
  const pcToggleHandler = () => {
    setIsOn(!isOn);
  };

  const onClickHandler = (index, newCategory) => {
    console.log(newCategory);
    const newState = activeState.map((state, stateIndex) => {
      if (index === stateIndex) {
        return !state;
      }
      return false;
    });
    setActiveState(newState);
    // [false, false, false]
    // { category: '', subCategory: '' };
    // const FalseState = newState.every((currentState) => {
    //   return currentState === false;
    // });

    if (category === newCategory) {
      dispatch(setCategory(''));
    } else {
      dispatch(setCategory(newCategory));
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
        {isOn ? <FaAngleLeft size="30" color="#FFF" /> : <FaAngleRight size="30" color="#FFF" />}
      </StPcCategoryToggle>
    </StPcCategory>
  );
};

export default PcCategory;
