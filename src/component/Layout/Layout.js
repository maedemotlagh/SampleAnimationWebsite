import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer";
import Blog from "../Blog/Blog";
import AboutUs from "../AboutUs/AboutUs";
import Prodotti from "../Prodotti/Prodotti";
import Sustainability from "../Sustainability/Sustainability";
import Professionals from "../Professionals/Professionals";

const Layout = () => {
  return (
    <BrowserRouter>
      
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Header/>} />
      </Routes>
      
      <Routes>
        <Route path="/" element={<MainContent/>} />
      </Routes>
      
      <Routes>
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      
      <Routes>
        <Route path="/About_Us" element={<AboutUs/>} />
      </Routes>
      
      <Routes>
        <Route path="/Prodotti" element={<Prodotti/>} />
      </Routes>
      
      <Routes>
        <Route path="/Sustainability" element={<Sustainability/>} />
      </Routes>
      
      <Routes>
        <Route path="/Professionals" element={<Professionals/>} />
      </Routes>
      
      <Footer/>
    
    </BrowserRouter>
  );
};

export default Layout;