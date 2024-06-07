import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { getUser } from '../api/api.auth';
import PostImage from '../components/post/ProductImage';
import PostName from '../components/post/ProductName';
import PostReview from '../components/post/ProductReview';
import usePosts from '../customHook/usePosts';
import { changePost } from '../store/slices/postSlice';
import supabase from '../supabase';
import Tag, { BrandTag, FlavorTag, TypeTag } from './post/Tag';

const PostInner = styled.div`
  max-width: 1240px;
  width: 80vw;
  height: 100%;
  gap: 30px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StTitle = styled.div`
  margin: auto;
  margin: 5rem 0 3rem;
  padding: 0 0 30px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #efefef;
  font-size: 1.3rem;
  color: #484848;
  box-sizing: border-box;
`;

const PostBox = styled.div`
  width: 100%;

  padding-bottom: 30px;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;

  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`;

const PostTitle = styled.div`
  width: 22%;
  font-size: 1rem;
  font-weight: 600;
  color: #484848;
  padding: 10px 0;
  @media screen and (max-width: 890px) {
    width: 100%;
  }
`;

const SubmitBox = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  background-color: #efefef;
`;

const SubmitButton = styled.button`
  width: 6.2rem;
  height: 2.4rem;
  border-radius: 1.5rem;
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    border-color: transparent;
    background-color: #fff;
    color: grey;
  }
`;

const CancelButton = styled.button`
  width: 6.2rem;
  height: 2.4rem;
  border-radius: 1.5rem;
  border: 1px solid black;
  background-color: transparent;
  color: black;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    border-color: transparent;
    background-color: #fff;
    color: grey;
  }
`;

const ButtonWrap = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: end;
  gap: 15px;
`;

const PostContainer = ({ postId }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(
    'https://ifzzsqrbvtphsikwxkms.supabase.co/storage/v1/object/public/avatars/default-img.png'
  );
  const [brand, setBrand] = useState('빙그레');
  const [flavor, setFlavor] = useState('딸기');
  const [type, setType] = useState('콘');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  usePosts();
  const posts = useSelector((state) => state.postList);

  useEffect(() => {
    if (!postId) {
      return;
    }
    if (postId) {
      const modify = posts.filter((post) => post.id === postId)[0];
      setName(modify.product_name);
      setContent(modify.post_content);
      setImage(modify.product_imageSrc);
      setBrand(modify.product_brand);
      setFlavor(modify.product_taste);
      setType(modify.product_type);
    }
  }, []);

  const AddHandler = async () => {
    if (!name) {
      alert('제품명을 입력해주세요 !');
      return;
    }
    if (!content) {
      alert('아이스크림 리뷰를 남겨주세요 !');
      return;
    }
    const users = await getUser();
    const { data, error } = await supabase.from('posts').insert({
      id: uuid(),
      user_id: users.email,
      product_name: name,
      product_brand: brand,
      product_imageSrc: image,
      post_content: content,
      popularity: 0,
      product_type: type,
      product_taste: flavor
    });
    if (error) {
    } else {
      alert('게시글이 등록되었습니다.');
      navigate('/');
    }
  };

  const ModifyHandler = async () => {
    if (!name) {
      alert('제품명을 입력해주세요 !');
      return;
    }
    if (!content) {
      alert('아이스크림 리뷰를 남겨주세요 !');
      return;
    }
    const users = await getUser();
    const { data, error } = await supabase
      .from('posts')
      .update({
        id: postId,
        user_id: users.email,
        product_name: name,
        product_brand: brand,
        product_imageSrc: image,
        post_content: content,
        popularity: 0,
        product_type: type,
        product_taste: flavor
      })
      .eq('id', postId);
    if (error) {
    } else {
      alert('게시글이 수정되었습니다.');
    }
    dispatch(changePost);
    navigate(-1);
  };

  const CancelHandler = () => {
    navigate(-1);
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
        <ButtonWrap>
          <SubmitButton onClick={postId ? ModifyHandler : AddHandler}>{postId ? '수정' : '등록'}</SubmitButton>
          <CancelButton onClick={CancelHandler} display={postId ? 'flex' : 'none'}>
            취소
          </CancelButton>
        </ButtonWrap>
      </SubmitBox>
    </>
  );
};

export default PostContainer;
