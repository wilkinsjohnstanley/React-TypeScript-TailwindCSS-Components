import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img0 from "../Images/img0.jpg";

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
  name: "Spaceman",
  price: 59.99,
  rating: 5.0,
  image: img0,
  soldOut: i % 3 === 0, // every 3rd item sold out, just for demo variety
}));

const ITEMS_PER_PAGE = 9;

// Main Function
const Clothing: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-gray-900 text-white font-playfair py-16 px-6 md:px-16">
      <motion.h2
        className="text-2xl md:text-4xl text-center font-medium tracking-wide animate-lights mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Our Clothing Collection
      </motion.h2>

      <p className="text-center text-lg md:text-xl animate-lights mb-12">
        Stylish, comfortable, and timeless pieces to elevate your wardrobe.
      </p>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {currentProducts.map((product, index) => (
         <motion.div
  key={product.id}
  className="relative text-center"
  initial={{ opacity: 1, y: 0 }}   // show immediately
  animate={{ opacity: 1, y: 0 }}   // stay visible
  transition={{ duration: 0 }}     // no animation
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

      {/* Pagination Controls */}
      <div className="flex justify-center mt-12 space-x-4">
        <button
          className="px-4 py-2 border border-white animate-lights hover:scale-105 hover:text-white transition hover-animate-glow disabled:opacity-50"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-4 py-2 border animate-lights transition hover-animate-glow ${
              currentPage === i + 1
                ? "bg-white text-black font-bold"
                : "border-white"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 border border-white animate-lights hover:scale-105 hover:text-white transition hover-animate-glow disabled:opacity-50"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Clothing;
