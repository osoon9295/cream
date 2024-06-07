import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import supabase from '../supabase';
import { addPost } from '../store/slices/postSlice';

const usePosts = () => {
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from('posts').select('*');
      if (error) {
        console.log('error =>', error);
        setIsSuccess(false);
      } else {
        dispatch(addPost(data));
        setIsSuccess(true);
        // console.log('data =>', data);
      }
    })();
  }, []);
  return { isSuccess };
};

export default usePosts;
