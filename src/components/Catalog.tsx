import React from "react";
import { motion } from "framer-motion";

import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";

type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  soldOut?: boolean;
};

const products: Product[] = [
  {
    id: 1,
    name: "Candle",
    price: 29.99,
    rating: 5.0,
    image: img1,
  },
  {
    id: 2,
    name: "Bag",
    price: 64.99,
    rating: 5.0,
    image: img2,
  },
  {
    id: 3,
    name: "Tapestry",
    price: 69.99,
    rating: 5.0,
    image: img3,
    soldOut: true,
  },
  {
    id: 4,
    name: "Hat",
    price: 59.99,
    rating: 5.0,
    image: img4,
    soldOut: true,
  },
];

const Catalog: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-playfair text-lg font-medium py-16">
      {/* Title */}
      {/* <h2 className="text-xl md:text-2xl text-[rgb(156,108,84)] hover:text-white font-playfair text-lg font-medium tracking-wide text-center mb-12">
        Let the universe spoil you.
      </h2> */}
<h2 className="
  text-xl md:text-2xl 
  font-playfair font-medium 
  tracking-wide text-center mb-12 
  animate-lights
">
  Let the universe spoil you.
</h2>
      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="relative text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Sold Out Banner */}
            {product.soldOut && (
              <span className="absolute left-0 top-0 bg-black text-xs px-2 py-1 uppercase">
                Sold Out
              </span>
            )}

            {/* Product Image */}
            {/* <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover transition duration-1000 ease-in-out opacity-25
        hover:opacity-100 cursor-pointer "
            /> */}
<motion.img
   src={product.image}
  alt={product.name}
  className="w-full h-72 object-cover cursor-pointer"
  initial={{ opacity: 1 }}                   
  whileInView={{ opacity: 0.25 }}            
  transition={{ duration: 1, delay: 1 }}     
  viewport={{ once: true }}
  whileHover={{ opacity: 1, transition: { duration: 0.2 } }} 
/>

            {/* Product Name */}
            <p className="mt-4 text-lg md:text-2xl   text-xl md:text-2xl 
  font-playfair font-medium 
  tracking-wide text-center mb-12 
  animate-lights">
              {product.name}
            </p>

            {/* Price */}
            <p className="mt-2 text-sm text-xl md:text-2xl 
  font-light 
  tracking-wide text-center mb-12 
  animate-lights">${product.price.toFixed(2)}</p>

            {/* Rating */}
            <div className="flex justify-center items-center mt-1   text-xl md:text-2xl 
  font-playfair font-medium 
  tracking-wide text-center mb-12 
  animate-lights">
              {"★".repeat(5)}
              {/* <span className="ml-2 text-white text-sm">
                ({product.rating.toFixed(1)})
              </span> */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore Button */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: products.length * 0.2 }}
        viewport={{ once: true }}
      >
        <button className=" 
        animate-lights 
        border border-white 
        font-playfair px-8 py-3 
        tracking-wide 
        hover:scale-105 hover:text-white transition hover-animate-glow">
          Explore Our Catalog
        </button>
   

      </motion.div>
    </div>
  );
};

export default Catalog;
