import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MobileBanner from "@/components/MobileBanner";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GreenLine from "@/components/categorys/GreenLine";
import PinkLine from "@/components/categorys/PinkLine";
import BlueLine from "@/components/categorys/BlueLine";
import PurpleLine from "@/components/categorys/PurpleLine";
import RedLine from "@/components/categorys/RedLine";
import MilitaryLine from "@/components/categorys/MilitaryLine";
import YellowLine from "@/components/categorys/YellowLine";
import AccesoriesLine from "@/components/categorys/AccesoriesLine";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <MobileBanner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PinkLine />} />
          <Route path="/producto1" element={<GreenLine />} />
          <Route path="/producto2" element={<BlueLine />} />
          <Route path="/producto3" element={<PurpleLine />} />
          <Route path="/producto4" element={<RedLine />} />
          <Route path="/producto5" element={<MilitaryLine />} />
          <Route path="/producto6" element={<YellowLine />} />
          <Route path="/producto7" element={<AccesoriesLine />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
