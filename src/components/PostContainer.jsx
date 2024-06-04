import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import Tag from './post/Tag';
import { BrandTag, FlavorTag, TypeTag } from './post/Tag';
import PostName from '../components/post/ProductName';
import PostImage from '../components/post/ProductImage';
import PostReview from '../components/post/ProductReview';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/slices/postSlice';
import supabase from '../supabase';

const PostInner = styled.div`
  max-width: 1240px;
  width: 70vw;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StTitle = styled.div`
  margin: auto;
  margin-top: 8%;
  padding: 30px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #efefef;
  font-size: 2rem;
  color: #484848;
`;

const PostBox = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 3%;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PostTitle = styled.div`
  width: 22%;
  font-size: 1rem;
  font-weight: 600;
  color: #484848;
  padding: 10px 0;
`;

const SubmitBox = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: #efefef;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

const SubmitButton = styled.div`
  width: 6.2rem;
  height: 2.4rem;
  border-radius: 1.5rem;
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 17%;
  font-size: 0.8rem;
  cursor: pointer;
`;

const PostContainer = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('오리온');
  const [flavor, setFlavor] = useState('딸기');
  const [type, setType] = useState('콘');

  // const posts = useSelector((state) => state.postList);
  // const dispatch = useDispatch();
  // dispatch(
  //   addPost({
  //     id: uuid(),
  //     productName: name,
  //     productBrand: brand,
  //     userId: '지영',
  //     productContent: content,
  //     productImageSrc: image,
  //     createdAt: Date.now(),
  //     popularity: 0
  //   })
  // );

  // console.log(posts);

  const DataHandler = async () => {
    const { data, error } = await supabase.from('posts').insert({
      id: uuid(),
      user_id: '지영',
      product_name: name,
      product_brand: brand,
      product_imageSrc: image,
      post_content: content,
      popularity: 0,
      created_at: '2024-06-04T07:37:44.326279+00:00'
    });
    if (error) {
      console.log(error);
    } else {
      alert('성공!');
      console.log('Data', data);
    }
  };

  return (
    <>
      <StTitle>게시글</StTitle>
      <PostInner>
        <PostBox>
          <PostTitle>제품명</PostTitle>
          <PostName name={name} setName={setName} />
        </PostBox>
        <PostBox>
          <PostTitle>이미지</PostTitle>
          <PostImage image={image} setImage={setImage} />
        </PostBox>
        <PostBox>
          <PostTitle>내용</PostTitle>
          <PostReview content={content} setContent={setContent} />
        </PostBox>
        <PostBox>
          <PostTitle>브랜드</PostTitle>
          <Tag
            tagArr={BrandTag}
            brand={brand}
            flavor={flavor}
            type={type}
            setBrand={setBrand}
            setFlavor={setFlavor}
            setType={setType}
          ></Tag>
        </PostBox>
        <PostBox>
          <PostTitle>맛</PostTitle>
          <Tag
            tagArr={FlavorTag}
            brand={brand}
            flavor={flavor}
            type={type}
            setBrand={setBrand}
            setFlavor={setFlavor}
            setType={setType}
          ></Tag>
        </PostBox>
        <PostBox>
          <PostTitle>콘 / 바 / 컵</PostTitle>
          <Tag
            tagArr={TypeTag}
            brand={brand}
            flavor={flavor}
            type={type}
            setBrand={setBrand}
            setFlavor={setFlavor}
            setType={setType}
          ></Tag>
        </PostBox>
      </PostInner>
      <SubmitBox>
        <SubmitButton onClick={DataHandler}>등록</SubmitButton>
      </SubmitBox>
    </>
  );
};

export default PostContainer;
