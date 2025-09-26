import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Calculadora from "./pages/Calculadora";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimacionPaginas>
              <Home />
            </AnimacionPaginas>
          }
        />
        <Route
          path="/calculadora"
          element={
            <AnimacionPaginas>
              <Calculadora />
            </AnimacionPaginas>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Wrapper de animación para cada página
function AnimacionPaginas({ children }) {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
        rotateX: -15,
        y: 50,
        filter: "blur(10px)",
      }}
      animate={{
        scale: 1,
        opacity: 1,
        rotateX: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      exit={{
        scale: 0,
        opacity: 0,
        rotateX: 15,
        y: -50,
        filter: "blur(10px)",
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ transformOrigin: "center center" }}
    >
      {children}
    </motion.div>
  );
}
