import React from 'react';
import styled from 'styled-components';

const StInput = styled.input`
  width: 60%;
  height: 2rem;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
`;

const ProductName = () => {
  return <StInput required />;
};

export default ProductName;
