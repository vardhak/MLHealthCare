import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Models from "./components/Models";
import Header from "./components/Header";
import Intutions from "./components/Intutions";
import Dengue from "./components/Dengue";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/intutions" element={<Intutions />} />
        <Route path="/models/dengue" element={<Dengue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
