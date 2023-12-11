import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Start from "./pages/Start";
import Inkorg from "./pages/Inkorg";
import BokadeTider from "./pages/BokadeTider";

function App() {
  return (
    <>
      <div className="ids">
        <Header />
        <div id="mainContainer">
          <BrowserRouter>
            <Routes>
              <Route index element={<Start />} />
              <Route path="/inkorg" element={<Inkorg />} />
              <Route path="/bokadetider" element={<BokadeTider />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
