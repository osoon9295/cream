import React from 'react';
import MobileCategory from './MobileCategory.jsx';
import MobileMenu from './MobileMenu.jsx';
import PcCategory from './PcCategory';

const MainCategory = () => {
  return (
    <>
      <MobileCategory />
      <PcCategory />
      <MobileMenu />
    </>
  );
};

export default MainCategory;
