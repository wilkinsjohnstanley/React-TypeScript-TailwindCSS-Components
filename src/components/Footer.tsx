import React, { useState } from 'react';
import { 
  SiAmericanexpress, 
  SiApplepay, 
  SiMastercard, 
  SiGooglepay, 
  SiPaypal, 
  SiVisa,
  SiShopify
} from 'react-icons/si';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe with email:', email);
  };

  return (
    <footer className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">
              NEWSLETTER
            </h3>
            <p className="text-gray-300 font-light leading-relaxed">
              Sign up to our newsletter to receive exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border border-gray-600 rounded-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="border border-gray-600 px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* General Info Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium tracking-wider uppercase text-gray-300">
              GENERAL INFO
            </h3>
            <nav className="space-y-4">
              <a href="#" className="block text-gray-300 font-light hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-gray-300 font-light hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="block text-gray-300 font-light hover:text-white transition-colors">
                Return Policy
              </a>
              <a href="#" className="block text-gray-300 font-light hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-300 font-light hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 font-light hover:text-white transition-colors">
                Form C Filing
              </a>
              <a href="#" className="block text-gray-300 font-light hover:text-white transition-colors">
                Sitemap
              </a>
            </nav>
          </div>

          {/* Fun Fact Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium tracking-wider uppercase text-gray-300">
              About John
            </h3>
            <p className="text-gray-300 font-light leading-relaxed">
            Think of John as your celestial attache, cultivating the best of the universe in one shopping basket. 
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-12">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 pt-8 border-t border-gray-700">
          {/* Country/Currency Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl"><img
              src="https://flagcdn.com/us.svg"
              alt="US Flag"
              className="w-6 h-6"
            /></span>
            <select className="bg-transparent text-gray-300 text-sm border-none focus:outline-none cursor-pointer">
              <option value="US">UNITED STATES (USD $)</option>
            </select>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © 2025 · JOHN'S JOURNEY
            </p>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center space-x-3">
                <SiAmericanexpress className="w-10 h-6 text-blue-600" />
                <SiApplepay className="w-10 h-6 text-black" />
                <SiMastercard className="w-10 h-6 text-red-500" />
                <SiGooglepay className="w-10 h-6 text-blue-500" />
                <SiPaypal className="w-10 h-6 text-blue-600" />
                <SiShopify className="w-10 h-6 text-purple-600" />
                <SiVisa className="w-10 h-6 text-blue-800" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;