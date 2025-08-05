import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductPage from "./components/ProductPage";
import HomePage from "./pages/HomePage";
import SingleProduct from "./pages/SingleProduct";
import ClothingPage from "./pages/ClothingPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
         <Route path="/clothing" element={<ClothingPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
