// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

import Calculadora from "./components/Calculadora";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/calculadora">Calculadora</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Calculadora />} />
      </Routes>
    </Router>
  );
}
