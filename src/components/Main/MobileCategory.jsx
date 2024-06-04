import React from 'react';
import styled from 'styled-components';

const StMobileCategory = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 68px;
  padding: 18px 0;
  background-color: #d5e0fc;

  @media (min-width: 1120px) {
    display: none;
  }

  button {
    font-size: 20px;
    border: transparent;
    background-color: transparent;
    cursor: pointer;
    color: #969696;
  }
`;

const MobileCategory = () => {
  return (
    <StMobileCategory>
      {/* active 글자색 변경 넣어야함 */}
      <li>
        <button>브랜드별</button>
      </li>
      <li>
        <button>맛별</button>
      </li>
      <li>
        <button>콘/바/컵</button>
      </li>
    </StMobileCategory>
  );
};

export default MobileCategory;
