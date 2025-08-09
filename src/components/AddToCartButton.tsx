// src/components/AddToCartButton.tsx
import React, { useState } from 'react';
import { ShoppingCart, Check, Plus } from 'lucide-react';
import { useCart, CartItem } from '../contexts/CartContext';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image?: string;
  };
  quantity?: number;
  size?: string;
  color?: string;
  variant?: 'primary' | 'secondary' | 'minimal' | 'icon';
  className?: string;
  disabled?: boolean;
  showIcon?: boolean;
  children?: React.ReactNode;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  quantity = 1,
  size,
  color,
  variant = 'primary',
  className = '',
  disabled = false,
  showIcon = true,
  children
}) => {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (disabled) return;

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      size,
      color,
    });

    // Show confirmation animation
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const getVariantClasses = () => {
    const baseClasses = 'transition-all duration-200 font-semibold flex items-center justify-center gap-2';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-black text-white px-6 py-3 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed ${isAdded ? 'bg-green-600 hover:bg-green-600' : ''}`;
      
      case 'secondary':
        return `${baseClasses} border-2 border-black text-black px-6 py-3 hover:bg-black hover:text-white disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed ${isAdded ? 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white' : ''}`;
      
      case 'minimal':
        return `${baseClasses} text-black underline hover:no-underline disabled:text-gray-400 disabled:cursor-not-allowed ${isAdded ? 'text-green-600' : ''}`;
      
      case 'icon':
        return `${baseClasses} w-12 h-12 rounded-full bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed ${isAdded ? 'bg-green-600 hover:bg-green-600' : ''}`;
      
      default:
        return baseClasses;
    }
  };

  const getButtonContent = () => {
    if (isAdded) {
      return (
        <>
          <Check className="w-4 h-4" />
          {variant !== 'icon' && 'Added!'}
        </>
      );
    }

    if (children) {
      return (
        <>
          {showIcon && <ShoppingCart className="w-4 h-4" />}
          {children}
        </>
      );
    }

    switch (variant) {
      case 'icon':
        return <Plus className="w-5 h-5" />;
      case 'minimal':
        return (
          <>
            {showIcon && <ShoppingCart className="w-4 h-4" />}
            Add to Cart
          </>
        );
      default:
        return (
          <>
            {showIcon && <ShoppingCart className="w-4 h-4" />}
            Add to Cart
          </>
        );
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={disabled}
      className={`${getVariantClasses()} ${className}`}
      aria-label={`Add ${product.name} to cart`}
    >
      {getButtonContent()}
    </button>
  );
};

export default AddToCartButton;