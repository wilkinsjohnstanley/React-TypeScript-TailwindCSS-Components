import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductPage from "./components/ProductPage";
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';

import HomePage from "./pages/HomePage";
import SingleProduct from "./pages/SingleProduct";
// import ClothingPage from "./pages/ClothingPage";
// import AccessoriesPage from "./pages/AccessoriesPage";
import ScrollToTop from "./components/ScrollToTop";
import BrowseAllProducts from "./pages/BrowseAllProducts";

const App: React.FC = () => {
  return (
     <CartProvider>
    <Router>
      <ScrollToTop/>

      <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
         <Route path="/browse" element={<BrowseAllProducts />} />

         {/* <Route path="/clothing" element={<ClothingPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} /> */}
      </Routes>
      </div>
    </Router>
    </CartProvider>
  );
};

export default App;
// // src/App.tsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './contexts/CartContext';
// import Header from './components/Header';
// // Import your other components here

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//        <ScrollToTop/>

//         <div className="App">
//           <Header />
//           <main className="pt-20"> {/* Add padding-top to account for fixed header */}
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//          <Route path="/product/:id" element={<SingleProduct />} />
//        <Route path="/browse" element={<BrowseAllProducts />} />
//               {/* Add your routes here */}
//               <Route path="/" element={<div>Home Page</div>} />
//               <Route path="/browse" element={<div>Browse Page</div>} />
//               {/* Add more routes as needed */}
//             </Routes>
//           </main>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;