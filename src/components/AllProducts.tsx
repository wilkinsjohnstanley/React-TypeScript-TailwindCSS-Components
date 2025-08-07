import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img0 from "../Images/img0.jpg";
import darkstars from "../Images/darkstars.jpg";
//Static data for demonstration purposes only.
type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  soldOut?: boolean;
};

const products: Product[] = Array.from({ length: 27 }, (_, i) => ({
  id: i + 1,
  name: "Cosmic Accessory",
  price: 39.99,
  rating: 4.8,
  image: img0,
  soldOut: i % 4 === 0, // every 4th accessory marked sold out
}));

const ITEMS_PER_PAGE = 9;

const AllProducts: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
<div className="relative min-h-screen bg-gray-900 text-white font-playfair py-16 px-6 md:px-16 overflow-hidden">
  {/* Background Image */}
            <div 
        className="absolute inset-0 bg-cover bg-center filter hue-rotate-90"
        style={{ backgroundImage: `url(${darkstars})` }}
      />

  {/* Content */}
  <motion.h2
    className="relative text-2xl md:text-4xl text-center font-medium tracking-wide animate-lights mb-12"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Discover Unique All Products
  </motion.h2>

  <p className="relative text-center text-lg md:text-xl animate-lights mb-12">
    From elegant bags to handcrafted jewelry, find your perfect finishing touch.
  </p>

  {/* Product Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
    {currentProducts.map((product) => (
      <motion.div
        key={product.id}
        className="relative text-center"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        {product.soldOut && (
          <span className="absolute left-0 top-0 bg-black text-xs px-2 py-1 uppercase">
            Sold Out
          </span>
        )}

        <Link to={`/product/${product.id}`}>
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover cursor-pointer"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0 }}
            whileHover={{ opacity: 1, scale: 1.05, transition: { duration: 0.2 } }}
          />
        </Link>

        <Link to={`/product/${product.id}`}>
          <p className="mt-4 text-lg md:text-2xl font-playfair font-medium tracking-wide text-center animate-lights">
            {product.name}
          </p>
        </Link>

        <p className="mt-2 text-xl font-light tracking-wide text-center animate-lights">
          ${product.price.toFixed(2)}
        </p>

        <div className="flex justify-center items-center mt-1 text-xl font-playfair font-medium tracking-wide text-center animate-lights">
          {"★".repeat(5)}
        </div>
      </motion.div>
    ))}
  </div>

  {/* Pagination */}
 <div className="relative flex justify-center mt-12 space-x-4">
  {/* Previous Button */}
  <button
    onClick={() => setCurrentPage((p) => p - 1)}
    disabled={currentPage === 1}
    className={`py-1.5 px-3 border border-gray-600 rounded text-sm transition-all
      ${currentPage === 1
        ? "opacity-50 cursor-not-allowed"
        : "hover-animate-glow hover:scale-105"
      }`}
  >
    Previous
  </button>

  {/* Numbered Page Buttons */}
  {Array.from({ length: totalPages }, (_, i) => {
    const page = i + 1;
    return (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`py-1.5 px-3 border border-gray-600 rounded text-sm transition-all
          ${currentPage === page
            ? "bg-blue-600 text-white border-white animate-glow"
            : "hover-animate-glow hover:scale-105"
          }`}
      >
        {page}
      </button>
    );
  })}

  {/* Next Button */}
  <button
    onClick={() => setCurrentPage((p) => p + 1)}
    disabled={currentPage === totalPages}
    className={`py-1.5 px-3 border border-gray-600 rounded text-sm transition-all
      ${currentPage === totalPages
        ? "opacity-50 cursor-not-allowed"
        : "hover-animate-glow hover:scale-105"
      }`}
  >
    Next
  </button>
</div>

</div>


  );
};

export default AllProducts;
