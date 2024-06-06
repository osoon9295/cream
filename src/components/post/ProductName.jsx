import React, { useContext } from 'react';
import styled from 'styled-components';

const StInput = styled.input`
  width: 60%;
  height: 2rem;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  @media screen and (max-width: 890px) {
    width: 95%;
  }
`;

const ProductName = ({ name, setName }) => {
  const NameHandler = (e) => {
    setName(e.target.value);
  };
  return <StInput onChange={NameHandler} value={name} required />;
};

export default ProductName;
