import { useState } from "react";

import About from "./app/about/About";
import Home from "./app/home/Home";
import { Route, Routes } from "react-router-dom";
import Legal from "./app/legal/Legal";
import CardDetails from "./components/card/CardDetails";

// import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/resource/:name" element={<CardDetails />} />
    </Routes>
  );
}

export default App;
