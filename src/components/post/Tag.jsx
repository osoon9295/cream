import React, { useState } from 'react';
import styled from 'styled-components';

const TagBox = styled.button`
  width: 5.5rem;
  height: 2rem;
  border-radius: 2rem;
  border-color: transparent;
  background-color: ${(props) => props.backgroundcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const BrandTag = ['오리온', '빙그레', '롯데제과', '해태제과', '매일유업'];
const FlavorTag = ['딸기', '바닐라', '초코', '민트초코', '기타'];
const TypeTag = ['콘', '바', '컵'];

const Tag = ({ tagArr, brand, flavor, type, setBrand, setFlavor, setType }) => {
  const BrandHandler = (e) => {
    setBrand(e.target.id);
  };

  const FlavorHandler = (e) => {
    setFlavor(e.target.id);
  };

  const TypeHandler = (e) => {
    setType(e.target.id);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {tagArr.map((tag, idx) => {
        if (
          (tagArr === BrandTag && tag === brand) ||
          (tagArr === FlavorTag && tag === flavor) ||
          (tagArr === TypeTag && tag === type)
        ) {
          return (
            <TagBox key={tag} id={tag} backgroundcolor="#99FF89">
              {tag}
            </TagBox>
          );
        }
        return (
          <TagBox
            key={tag}
            id={tag}
            backgroundcolor="#efefef"
            onClick={tagArr === BrandTag ? BrandHandler : tagArr === FlavorTag ? FlavorHandler : TypeHandler}
          >
            {tag}
          </TagBox>
        );
      })}
    </div>
  );
};

export default Tag;
export { BrandTag, FlavorTag, TypeTag, TagBox };
