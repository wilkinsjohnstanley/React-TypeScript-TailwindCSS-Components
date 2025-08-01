import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

const Carousel = () => {
  // Luxury product carousel data inspired by T|W Tote
  const data = [
    {
      src: "https://images.pexels.com/photos/8359846/pexels-photo-8359846.jpeg",
      alt: "Mountain 1",
      title: "ROCKY MOUNTAIN WEEKENDER",
      subtitle: "Where Fashionistas Meet The Backlit Mountains for one transformational weekend away",
      description: "",
      price: "$285",
      badge: "POPULAR"
    },
    {
      src: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
      alt: "Mountain 2",
      title: "SNOWY DELICATE OVERNIGHTER",
      subtitle: "An Ethereal Experience of Winter Whimsy",
      description: "",
      price: "$95",
      badge: "NEW"
    },
    {
      src: "https://images.pexels.com/photos/18847593/pexels-photo-18847593.jpeg",
      alt: "Mountain 3",
      title: "STARGAZERS' STOWAWAY RETREAT",
      subtitle: "Stargazing experience",
      description: "Stow away with us for a retreat under the centuries old starlight",
      price: "$125",
      badge: "5.0 ★★★★★"
    }
  ];

  const [slide, setSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prevSlide => prevSlide === data.length - 1 ? 0 : prevSlide + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setSlide(prevSlide => prevSlide === data.length - 1 ? 0 : prevSlide + 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setSlide(prevSlide => prevSlide === 0 ? data.length - 1 : prevSlide - 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const goToSlide = (index) => {
    if (index === slide) return;
    
    setIsTransitioning(true);
    setSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <div className=" relative top-0 left-0 w-full h-screen z-10 min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center">
      <div className="relative w-full max-w-7xl h-[700px]  rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-6 h-6 /90 backdrop-blur-sm rounded-full shadow-lg hover: hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <ChevronLeft className="w-6 h-6 text-stone-800 group-hover:text-black transition-colors" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-6 h-6 /90 backdrop-blur-sm rounded-full shadow-lg hover: hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <ChevronRight className="w-6 h-6 text-stone-800 group-hover:text-black transition-colors" />
        </button>

        {/* Slides Container */}
        <div className="relative w-full h-full">
          {data.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                slide === idx 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.src})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex items-center">
                <div className="w-full max-w-2xl ml-12 md:ml-20 text-white">
                  
                  {/* Badge */}
                  <div className="inline-block mb-4">
                    <span className="px-4 py-2 /20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wide">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4 leading-tight">
                    {item.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xl md:text-2xl font-light text-stone-200 mb-6 tracking-wide">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-lg text-stone-300 mb-8 max-w-xl leading-relaxed">
                    {item.description}
                  </p>

                  {/* Price and CTA */}
                  <div className="flex items-center gap-8">
                    <span className="text-4xl font-light tracking-wider">
                      {item.price}
                    </span>
                    <button className="group px-8 py-4  text-black rounded-full hover:bg-stone-900 hover:text-white transition-all duration-300 flex items-center gap-3 font-medium">
                      <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 ${
                slide === idx 
                  ? 'w-12 h-3  rounded-full' 
                  : 'w-3 h-3 /50 rounded-full hover:/70'
              }`}
            />
          ))}
        </div>

        {/* Brand Watermark */}
        {/* <div className="absolute top-8 left-8 z-30">
          <div className="text-white/80 font-light tracking-[0.3em] text-sm">
            John's Journey
          </div>
        </div> */}

        {/* Transition Overlay */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-[1px] z-20 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />
      </div>
    </div>
  );
};

export default Carousel;