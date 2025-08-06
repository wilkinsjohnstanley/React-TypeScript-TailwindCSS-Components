import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import darkstars from "../Images/darkstars.jpg"
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
  },
    {
    src: darkstars,
    alt: "Mountain 4",
    title: "STARGAZERS' STOWAWAY RETREAT",
    subtitle: "Stargazing experience",
    description: "Stow away with us for a retreat under the centuries old starlight",
    price: "$125",
    badge: "5.0 ★★★★★"
  }
];

interface ProductImage {
  id: string;
  url: string;
  color: string;
}

interface ColorOption {
  name: string;
  value: string;
  bgColor: string;
  images: ProductImage[];
}

const ProductPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('Black Heather');
  const [selectedSize, setSelectedSize] = useState('XS');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);

  const colors: ColorOption[] = [
    {
      name: 'Black Heather',
      value: 'black-heather',
      bgColor: 'bg-gray-800',
      images: [
        { id: '1', url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop', color: 'black-heather' },
        { id: '2', url: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop', color: 'black-heather' },
        { id: '3', url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop', color: 'black-heather' },
      ]
    },
    {
      name: 'Gold',
      value: 'gold',
      bgColor: 'bg-yellow-600',
      images: [
        { id: '4', url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=600&fit=crop', color: 'gold' },
        { id: '5', url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop', color: 'gold' },
      ]
    },
    // ...rest of your colors...
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

  const currentColorData = colors.find(color => color.name === selectedColor) || colors[0];
  const currentImages = currentColorData.images;
  const currentImage = currentImages[currentImageIndex] || currentImages[0];

  const handleColorChange = (colorName: string) => {
    setSelectedColor(colorName);
    setCurrentImageIndex(0);
  };

  const handleImageSelect = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="relative min-h-screen">
      {/* Background Layer with Hue Rotate */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter hue-rotate-90"
        style={{ backgroundImage: `url(${data[3].src})` }}
      />

      {/* Foreground Content */}
      <div className="relative text-white min-h-screen p-6 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Images */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                {/* Thumbnails */}
                <div className="flex flex-col gap-3">
                  {currentImages.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => handleImageSelect(index)}
                      className={`w-16 h-16 border-2 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                        index === currentImageIndex ? 'border-white' : 'border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={`${selectedColor} shirt view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Main Image */}
                <div 
                  className="relative bg-white rounded-lg overflow-hidden flex-1"
                  onMouseEnter={() => setIsHoveringCarousel(true)}
                  onMouseLeave={() => setIsHoveringCarousel(false)}
                >
                  <img
                    src={currentImage.url}
                    alt={`${selectedColor} shirt`}
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  
                  {/* Carousel Controls */}
                  {currentImages.length > 1 && isHoveringCarousel && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="space-y-4">
              {/* Header */}
              <div className="flex justify-between items-start">
                <h1 className="text-lg lg:text-xl font-medium leading-tight animate-lights">
                  T-Shirt
                </h1>
                <Star className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>

              {/* Price */}
              <div className="text-xl font-medium animate-lights">$35.00</div>

              {/* Payment Options */}
              <div className="text-xs text-gray-300 animate-lights">
                Pay in 2 interest-free installments of <span className="font-medium">$17.50</span> with{' '}
                <span className="text-blue-400 font-medium">Shop Pay</span>{' '}
                <button className="underline hover:no-underline">Learn more</button>
              </div>

              {/* Color Selection */}
              <div className="space-y-2 animate-lights">
                <div className="text-xs">
                  <span className="font-medium">Color:</span> {selectedColor}
                </div>
                <div className="flex space-x-2">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => handleColorChange(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color.name 
                          ? 'border-white scale-110' 
                          : 'border-gray-600 hover:border-gray-400'
                      } ${color.bgColor}`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-2 animate-lights">
                <div className="text-xs">
                  <span className="font-medium">Size:</span> {selectedSize}
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-1.5 px-2 border border-gray-600 rounded text-xs transition-all ${
                        selectedSize === size
                          ? 'bg-blue-600 text-white border-white animate-glow'
                          : 'hover-animate-glow hover:scale-105'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-2 animate-lights">
                <div className="text-xs font-medium">Quantity</div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center border border-gray-600 rounded">
                    <button
                      onClick={decrementQuantity}
                      className="p-1.5 hover:bg-gray-800 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 py-1.5 min-w-[2.5rem] text-center text-xs">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="p-1.5 hover:bg-gray-800 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <button className="w-full bg-transparent border border-gray-600 text-white py-2.5 px-4 rounded hover-animate-glow hover:scale-105 transition-all font-medium text-sm animate-lights">
                ADD TO CART
              </button>
              <button className=
              "w-full bg-blue-600 text-white py-2.5 px-4 rounded hover:bg-blue-700 hover-animate-glow hover:scale-105 transition-colors font-medium text-sm animate-lights animate-glow">
                Buy with ShopPay
              </button>
              <button className="w-full text-center text-xs text-gray-400 hover:text-white underline transition-colors animate-lights">
                More payment options
              </button>

              {/* Delivery Info */}
              <div className="pt-4 border-t border-gray-700 animate-lights">
                <div className="text-xs font-medium mb-1.5">Estimated delivery to</div>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-xl">🇺🇸</span>
                  <span>United States Aug 12—28</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
