import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MobileBanner from "@/components/MobileBanner";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "@/components/categorys/Home";
import Product1 from "@/components/categorys/Product1";
import Product2 from "@/components/categorys/Product2";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <MobileBanner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto1" element={<Product1 />} />
          <Route path="/producto2" element={<Product2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
