import React from "react";
import Register from "./components/registerComponent/register";
import HomeComp from "./views/home/homeComp";
import Login from './views/login/login'
import Explore from "./views/explore/explore";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path='/login' element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/publish" element={<h1>Publish</h1>} />
        <Route path="/notifications" element={<h1>Notifications</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </>
  );
}

export default App;
