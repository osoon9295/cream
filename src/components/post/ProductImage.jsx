import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  width: 170px;
  height: 170px;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px 0;
  @media screen and (max-width: 890px) {
    width: 8rem;
    height: 8rem;
  }
`;

const ProductImage = ({ image, setImage }) => {
  const ImageHandler = (e) => {
    const reader = new FileReader();
    let file = e.target.files[0];
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div>
        <Label htmlFor="photo">
          <img style={{ height: '100%', objectFit: 'cover' }} src={image ? image : '../img/Upload.png'} alt="" />
        </Label>
        <span style={{ fontSize: '0.7rem', color: '#c0c0c0' }}>상품 이미지는 2:1 비율로 보여져요.</span>
      </div>
      <input type="file" id="photo" accept=".png, .jpeg, .jpg" onChange={ImageHandler} style={{ display: 'none' }} />
    </>
  );
};

export default ProductImage;
