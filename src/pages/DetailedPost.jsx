import React, { useEffect } from 'react';
import supabase from '../supabase';
import { deletePost } from '../store/slices/postSlice';
import { useNavigate } from 'react-router-dom';
import usePosts from '../customHook/usePosts';
import { useDispatch, useSelector } from 'react-redux';

const DetailedPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  usePosts();

  const posts = useSelector((state) => state.postList);
  console.log(posts);

  const onDeletePost = async (id) => {
    const response = await supabase.from('posts').delete().eq('id', id);
    dispatch(deletePost(id));
    console.log(response);
  };

  return (
    <div>
      <button
        onClick={() => {
          navigate('/modifyPost');
        }}
      >
        수정페이지
      </button>
    </div>
  );
};

export default DetailedPost;
