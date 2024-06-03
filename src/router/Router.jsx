import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Join from '../pages/Join';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';
import CreatePost from '../pages/CreatePost';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
