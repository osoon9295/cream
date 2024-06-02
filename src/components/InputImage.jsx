import React, { useId, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import styled from 'styled-components';

const InputFileWrap = styled.div`
  width: 14.25rem;
  height: 14.25rem;
  margin: 1.5rem auto;
  position: relative;
`;

const StlyeImageShow = styled.label`
  width: 100%;
  height: 100%;
  background-color: #efefef;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 1rem;
    color: #c0c0c0;
    font-size: 2.5rem;
  }
  > div p {
    font-size: 1rem;
  }
`;

const StlyeLabel = styled.label`
  position: absolute;
  right: 0;
  bottom: 0;
  color: #ffffff;
  background-color: #000000;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function InputImage({ name = 'image' }) {
  const [imageSrc, setImageSrc] = useState();
  const inputId = useId();

  const handleChange = async (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  };

  return (
    <InputFileWrap>
      <input type="file" onChange={handleChange} accept="image/*" maxLength={1} name="" id={inputId} hidden />
      <StlyeImageShow>
        {imageSrc ? (
          <img src={imageSrc} />
        ) : (
          <div>
            <FaCamera />
            <p>이미지등록</p>
          </div>
        )}
      </StlyeImageShow>
      <StlyeLabel htmlFor={inputId}>
        <GoPlus />
      </StlyeLabel>
    </InputFileWrap>
  );
}
