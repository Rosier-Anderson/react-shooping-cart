import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Store from "./pages/store/Store";
import Navigation from "./components/navigation/Navigation";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
