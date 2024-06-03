import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px 0;
`;

const ProductImage = () => {
  return (
    <>
      <div>
        <Label htmlFor="photo">
          <img style={{ width: '100%', objectFit: 'cover' }} src="../img/Upload.png" alt="" />
        </Label>
        <span style={{ fontSize: '0.7rem', color: '#c0c0c0' }}>상품 이미지는 2:1 비율로 보여져요.</span>
      </div>
      <input type="file" id="photo" accept=".png, .jpeg, .jpg" style={{ display: 'none' }} />
    </>
  );
};

export default ProductImage;
