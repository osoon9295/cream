import React, { useEffect, useState } from 'react';
import supabase from '../supabase';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/slices/postSlice';

const DetailedPost = () => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('posts').select('*');
      if (error) {
        console.log('error =>', error);
      } else {
        // console.log('data =>', data);
        setList(data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(addPost(list));
  }, [list]);

  const posts = useSelector((state) => state.postList);
  console.log(posts);

  return (
    <div>
      {posts.map((li) => {
        return (
          <div key={li.id} style={{ margin: '20px' }}>
            {li.product_name}
            <br />
            {li.user_id}
            <br />
            {li.product_brand}
            <br />
            {li.post_content}
            <br />
            {li.created_at}
          </div>
        );
      })}
    </div>
  );
};

export default DetailedPost;
