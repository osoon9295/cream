import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDropright } from 'react-icons/io';
import { IoIosArrowDropleft } from 'react-icons/io';

const StContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const StAllSlides = styled.div`
  width: 300vw;
  display: flex;
  transform: translate(-0vw);
  transition: all 1s;
`;

const StSlide = styled.div`
  width: 100vw;
  /* height: 100vw; */
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StPrevBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 30px;
  width: fit-content;
  cursor: pointer;
  position: absolute;
  top: 50%;

  &:active {
    color: #ededed;
    cursor: pointer;
  }
`;

const StNextBtn = styled.button`
  background-color: transparent;
  font-size: 30px;
  border: none;
  width: fit-content;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0px;

  &:active {
    color: #ededed;
    cursor: pointer;
  }
`;

const Carousel = () => {
  const banners = ['img/banner1.png', 'img/banner2.png', 'img/banner3.png'];
  const [currentSlide, setCurrentSlide] = useState(0);

  const toPrevBanner = () => setCurrentSlide(currentSlide >= 0 ? currentSlide - 1 : currentSlide);
  const toNextBanner = () => setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : currentSlide);

  const containerStyle = {
    transform: `translate(-${currentSlide}00vw)`
  };

  return (
    <StContainer>
      <StAllSlides style={containerStyle}>
        {banners.map((banner) => {
          return (
            <StSlide key={banner}>
              <SlideImg src={banner} />
            </StSlide>
          );
        })}
      </StAllSlides>

      <StPrevBtn onClick={toPrevBanner}>
        <IoIosArrowDropleft />
      </StPrevBtn>
      <StNextBtn>
        <IoIosArrowDropright onClick={toNextBanner} />
      </StNextBtn>
    </StContainer>
  );
};

export default Carousel;
