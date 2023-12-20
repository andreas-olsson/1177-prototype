import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Start from "./pages/Start";
import Inkorg from "./pages/Inkorg";
import BokadeTider from "./pages/BokadeTider";
import BokaTid from "./pages/BokaTid";

function App() {
  return (
    <BrowserRouter>
      <div className="ids">
        <Header />
        <div id="mainContainer">
          <Routes>
            <Route index element={<Start />} />
            <Route path="/inkorg" element={<Inkorg />} />
            <Route path="/bokadetider" element={<BokadeTider />} />
            <Route path="/bokatid" element={<BokaTid />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
