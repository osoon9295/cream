import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const WrittenPost = () => {
  const posts = useSelector((state) => state.postList);

  return (
    <>
      <p></p>
    </>
  );
};

export default WrittenPost;
