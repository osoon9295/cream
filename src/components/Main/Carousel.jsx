import React, { useState } from 'react';
import styled from 'styled-components';

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
  cursor: pointer;
  position: absolute;
  top: 50%;
`;

const StNextBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 0px;
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
      <StPrevBtn onClick={toPrevBanner}> prev </StPrevBtn>
      <StNextBtn onClick={toNextBanner}> next </StNextBtn>
    </StContainer>
  );
};

export default Carousel;
