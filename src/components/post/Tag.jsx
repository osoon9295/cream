import React, { useState } from 'react';
import styled from 'styled-components';

const TagBox = styled.div`
  width: 5.5rem;
  height: 2rem;
  border-radius: 2rem;
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

const Tag = ({ state, tagArr }) => {
  const [brand, setBrand] = useState('오리온');
  const [flavor, setFlavor] = useState('딸기');
  const [type, setType] = useState('콘');
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {tagArr.map((tag, idx) => {
        if (tag === brand || tag === flavor || tag === type) {
          return (
            <TagBox key={idx} backgroundcolor="#99FF89">
              {tag}
            </TagBox>
          );
        }
        return (
          <TagBox key={idx} backgroundcolor="#efefef">
            {tag}
          </TagBox>
        );
      })}
    </div>
  );
};

export default Tag;
export { BrandTag, FlavorTag, TypeTag };
