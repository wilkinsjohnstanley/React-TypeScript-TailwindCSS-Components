import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Free US Shipping */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <svg 
                className="w-12 h-12 text-gray-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 21h6"
                />
              </svg>
            </div>
            <h3 className="text-sm font-medium tracking-wider uppercase text-gray-300 mb-2">
              FREE US SHIPPING
            </h3>
            <p className="text-gray-300">
              For orders over $150
            </p>
          </div>

          {/* 100% Satisfaction */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <svg 
                className="w-12 h-12 text-gray-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <h3 className="text-sm font-medium tracking-wider uppercase text-gray-300 mb-2">
              100% SATISFACTION
            </h3>
            <p className="text-gray-300">
              Check our{' '}
              <a 
                href="#" 
                className="underline hover:text-white transition-colors"
              >
                Quality Promise
              </a>
            </p>
          </div>

          {/* Top-Notch Support */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <svg 
                className="w-12 h-12 text-gray-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-medium tracking-wider uppercase text-gray-300 mb-2">
              TOP-NOTCH SUPPORT
            </h3>
            <p className="text-gray-300">
              Got questions?{' '}
              <a 
                href="#" 
                className="underline hover:text-white transition-colors"
              >
                Email us
              </a>
              !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;