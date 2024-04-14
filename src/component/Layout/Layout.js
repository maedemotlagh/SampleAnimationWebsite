import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>} />
      </Routes>
      <Routes>
        <Route path="/" element={<Header/>} />
      </Routes>
      <Routes>
        <Route path="/" element={<MainContent/>} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;