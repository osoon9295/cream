import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Join from '../pages/Join';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';
import MyPage from '../pages/MyPage';
import ProfileEdit from '../pages/ProfileEdit';
import CreatePost from '../pages/CreatePost';
import ModifyPost from '../pages/ModifyPost';
import DetailedPost from '../pages/DetailedPost';

export default function Router() {
  const [user, setUser] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/modifyPost/:id" element={<ModifyPost />} />
          <Route path="/detailed" element={<DetailedPost />} />
          <Route path="/mypage" element={<MyPage user={user} setUser={setUser} />} />
          <Route path="/mypage/profile-edit" element={<ProfileEdit user={user} setUser={setUser} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
