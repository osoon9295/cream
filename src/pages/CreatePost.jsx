import React, { useEffect, useState } from 'react';
import PostContainer from '../components/PostContainer';
import supabase from '../supabase';
const CreatePost = () => {
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, error } = await supabase.from('posts').select('*');
  //     if (error) {
  //       console.log('error =>', error);
  //     } else {
  //       console.log('data =>', data);
  //       setList(data);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <PostContainer />
    </>
  );
};

export default CreatePost;
