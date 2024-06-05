import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import supabase from '../supabase';
import { addPost } from '../store/slices/postSlice';

const usePosts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from('posts').select('*');
      if (error) {
        console.log('error =>', error);
      } else {
        dispatch(addPost(data));
        // console.log('data =>', data);
      }
    })();
  }, []);
};

export default usePosts;
