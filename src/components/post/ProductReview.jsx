import React from 'react';
import styled from 'styled-components';

const StTextarea = styled.textarea`
  width: 60%;
  height: 10rem;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  padding: 10px;
`;

const ProductReview = ({ content, setContent }) => {
  const ContentHandler = (e) => {
    setContent(e.target.value);
  };
  return (
    <StTextarea placeholder="아이스크림 맛은 어땠나요?" onChange={ContentHandler} value={content} required></StTextarea>
  );
};

export default ProductReview;
