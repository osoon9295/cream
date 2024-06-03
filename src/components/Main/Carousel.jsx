import React from 'react';
import styled from 'styled-components';

const ViewSlide = styled.div`
  width: 100vw;
  height: 300px;
`;

const AllSlides = styled.div`
  width: 300vw;
  display: flex;
  transform: translate(-0vw);
`;

const Carousel = () => {
  return (
    <ViewSlide>
      <img src="img/carousel1.png" />
    </ViewSlide>
  );
};

export default Carousel;
