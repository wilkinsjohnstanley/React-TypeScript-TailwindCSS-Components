import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";

const products = [
  { id: 1, name: "Candle", price: 29.99, rating: 5, description: "A soothing scented candle.", image: img1, inStock: true },
  { id: 2, name: "Bag", price: 64.99, rating: 4.5, description: "Elegant handcrafted bag.", image: img2, inStock: true },
  { id: 3, name: "Tapestry", price: 69.99, rating: 4.8, description: "Vibrant wall tapestry.", image: img3, inStock: false },
];

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-white text-center py-16">Product not found.</div>;
  }

  return (
    <div className="bg-gray-900 text-white font-playfair py-16 px-6 md:px-16">
      <motion.h2
        className="text-2xl md:text-4xl text-center font-medium tracking-wide animate-lights mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Trust the universe
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-[28rem] object-cover rounded-lg shadow-lg cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-medium mb-4 animate-lights">
            {product.name}
          </h3>

          <p className="text-xl md:text-2xl font-light animate-lights mb-2">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex items-center mb-6 animate-lights">
            {"★".repeat(Math.floor(product.rating))}
            {product.rating % 1 !== 0 && "☆"}
            <span className="ml-2 text-sm">({product.rating.toFixed(1)})</span>
          </div>

          <p className="text-md md:text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          {product.inStock ? (
            <motion.button
              className="animate-lights border border-white font-playfair px-8 py-3 tracking-wide hover:scale-105 hover:text-white transition hover-animate-glow"
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
          ) : (
            <p className="text-red-400 text-lg font-medium">Out of Stock</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
