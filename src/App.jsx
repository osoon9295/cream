import React from 'react';
import MainPage from './pages/MainPage';
import styled from 'styled-components';

const ResponsiveDiv = styled.div`
  background-color: gray;
  width: 100%;

  /* @media screen and (max-width: 500px) {
    width: 50%;
  } */
`;

const App = () => {
  return (
    <ResponsiveDiv>
      <MainPage />
    </ResponsiveDiv>
  );
};

export default App;
