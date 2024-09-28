import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Models from "./components/Models";
import Header from "./components/Header";
import Intutions from "./components/Intutions";
import Dibeties from "./components/Dibeties";
import Cancer from "./components/Cancer";
import Dengue from "./components/Dengue";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/intutions" element={<Intutions />} />
        <Route path="/models/dengue" element={<Dengue />} />
        <Route path="/models/dibeties" element={<Dibeties />} />
        <Route path="/models/cancer" element={<Cancer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
