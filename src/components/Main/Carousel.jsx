import React, { useState } from 'react';
import styled from 'styled-components';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';

const StContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const StPcAllSlides = styled.div`
  width: 300vw;
  display: flex;
  transform: translate(-0vw);
  transition: all 1s;

  @media (max-width: 800px) {
    display: none;
  }
`;

const StMobileAllSlides = styled.div`
  width: 300vw;
  display: flex;
  transform: translate(-0vw);
  transition: all 1s;

  @media (min-width: 800px) {
    display: none;
  }
`;

const StSlide = styled.div`
  width: 100vw;
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StPrevBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 50px;
  width: fit-content;
  cursor: pointer;
  position: absolute;
  top: 45%;
  left: 5%;
  color: #ededed;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const StNextBtn = styled.button`
  background-color: transparent;
  font-size: 50px;
  border: none;
  width: fit-content;
  cursor: pointer;
  position: absolute;
  top: 45%;
  right: 5%;
  color: #ededed;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const Carousel = () => {
  const banners = ['img/banner1.png', 'img/banner2.png', 'img/banner3.png'];
  const mbanners = ['img/m-banner1.png', 'img/m-banner2.png', 'img/m-banner3.png'];
  const [currentSlide, setCurrentSlide] = useState(0);

  const toPrevBanner = () => setCurrentSlide(currentSlide >= 0 ? currentSlide - 1 : currentSlide);
  const toNextBanner = () => setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : currentSlide);

  const containerStyle = {
    transform: `translate(-${currentSlide}00vw)`
  };

  return (
    <StContainer>
      <StPcAllSlides style={containerStyle}>
        {banners.map((banner) => {
          return (
            <StSlide key={banner}>
              <SlideImg src={banner} />
            </StSlide>
          );
        })}
      </StPcAllSlides>
      <StMobileAllSlides style={containerStyle}>
        {mbanners.map((mbanner) => {
          return (
            <StSlide key={mbanner}>
              <SlideImg src={mbanner} />
            </StSlide>
          );
        })}
      </StMobileAllSlides>

      <StPrevBtn onClick={toPrevBanner}>
        <SlArrowLeft />
      </StPrevBtn>
      <StNextBtn onClick={toNextBanner}>
        <SlArrowRight />
      </StNextBtn>
    </StContainer>
  );
};

export default Carousel;
