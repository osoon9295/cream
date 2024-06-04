import React from 'react';

const CategoryButton = ({ pcIcon, pcIconName, isActive }) => {
  return (
    <>
      <button style={{ color: isActive ? '#fff' : '#a0abc9' }}>
        {pcIcon}
        <span>{pcIconName}</span>
      </button>
    </>
  );
};

export default CategoryButton;
