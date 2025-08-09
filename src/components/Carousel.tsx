import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
const Carousel = () => {
  // Luxury product carousel data inspired by T|W Tote
  const data = [
    {
      src: "https://images.pexels.com/photos/8359846/pexels-photo-8359846.jpeg",
      alt: "Mountain 1",
      title: "",
      subtitle: "",
      description: "The universe is working behind the scenes in ways you can't comprehend to help you align.",
      price: "",
      badge: ""
    },
    {
      src: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
      alt: "Mountain 2",
      title: "",
      subtitle: "",
      description: "We cultivate the spectacular",
      price: "",
      badge: ""
    },
    {
      src: "https://images.pexels.com/photos/18847593/pexels-photo-18847593.jpeg",
      alt: "Mountain 3",
      title: "",
      subtitle: "",
      description: "Allow yourself to give in to the beauty of the universe",
      price: "",
      // badge: "5.0 ★★★★★"
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
<div className="relative bg-gray-800 w-full h-[calc(100vh-15rem)] z-10 flex items-center justify-center">
      <div className="relative w-full max-w-7xl h-full  rounded-2xl shadow-2xl overflow-hidden">

      
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
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
  <div className="w-full max-w-2xl text-white">
    
    {/* Badge */}
    <div className="inline-block mb-4">
      <span className="px-4 py-2 /20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wide">
        {item.badge}
      </span>
    </div>

  


    {/* Subtitle */}
    <p className="uppercase tracking-widest text-sm font-light mb-3">
      {item.subtitle}
    </p>
      {/* Title */}
    <h1 className="text-3xl md:text-5xl font-medium tracking-wide leading-snug mb-6">
      {item.title}
    </h1>

    {/* Description
    <p className="text-lg text-stone-300 mb-8 max-w-xl leading-relaxed mx-auto">
      {item.description}
    </p> */}

    {/* Price and CTA */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
      <span className="text-4xl font-light tracking-wider">
        {item.price}
      </span>

      <Link to={`/browse`}>
        <button className="group px-8 py-3 uppercase tracking-wide text-sm font-medium bg-blue-400 text-white rounded-sm justify-center hover:bg-blue-500 hover-animate-glow hover:scale-105 transition-colors font-semibold text-sm tracking-wide uppercase animate-lights animate-glow flex items-center gap-2">
          <ShoppingCart />
          DISCOVER SOMETHING NEW
        </button>
      </Link>
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