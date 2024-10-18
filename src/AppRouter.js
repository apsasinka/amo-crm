import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Users from "./users/Users";
import UserDetailPage from "./pages/UserDetailPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:id" element={<UserDetailPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
