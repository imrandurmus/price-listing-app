import React, { useState } from "react";
import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const swatchColors = [
    { name: 'Yellow Gold', hex: '#E6CA97' },
    { name: 'White Gold', hex: '#D9D9D9' },
    { name: 'Rose Gold', hex: '#E1A4A9' },
  ];

  let availableSwatches = swatchColors.filter(c => product.images[c.name]);

  if (availableSwatches.length === 0) {
    availableSwatches = Object.keys(product.images).map(name => {
      let hex = '#D1D5DB';
      if (name.toLowerCase().includes('yellow')) hex = '#E6CA97';
      else if (name.toLowerCase().includes('white')) hex = '#D9D9D9';
      else if (name.toLowerCase().includes('rose')) hex = '#E1A4A9';
      else if (name.toLowerCase().includes('gold')) hex = '#FFD700';
      return { name, hex };
    });
  }
  const [selectedColor, setSelectedColor] = useState(availableSwatches[0]?.name || '');
  const selectedImage = product.images[selectedColor];

  
  const colorOrder = [
    'Yellow Gold',
    'White Gold',
    'Rose Gold'
  ];
  // const sortedColorNames = [...colorOrder].sort((a, b) => {
  //   const aIdx = colorOrder.indexOf(a);
  //   const bIdx = colorOrder.indexOf(b);
  //   if (aIdx === -1 && bIdx === -1) return a.localeCompare(b);
  //   if (aIdx === -1) return 1;
  //   if (bIdx === -1) return -1;
  //   return aIdx - bIdx;
  // };

  // Map color names to Tailwind classes
  // const colorToClass: Record<string, string> = {
  //   'Yellow Gold': 'bg-yellow-200',
  //   'White Gold': 'bg-gray-200',
  //   'Rose Gold': 'bg-pink-200',
  // };

  return (
    <div className="w-64 max-w-xs bg-white rounded-xl shadow-md p-4 m-2 flex-shrink-0">
      <img
        src={selectedImage}
        alt={product.name}
        className="w-full max-w-xs h-48 object-contain rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold text-left">{product.name}</h3>
      <p className="text-gray-600 text-left">${product.price.toFixed(2)} USD</p>
      <div className="flex flex-row items-center gap-3 mt-2 mb-1" dir="ltr">
        {availableSwatches.map((color) => (
    <span
      key={color.name}
      onClick={() => setSelectedColor(color.name)}
      className={`w-7 h-7 rounded-full border-2 border-gray-300 inline-block cursor-pointer transition ${selectedColor === color.name ? 'ring-2 ring-black' : ''}`}
      style={{ backgroundColor: color.hex }}
      title={color.name} // Optional: shows name on hover
    ></span>
        ))}

      </div>
      <div className="text-xs text-left text-gray-500 mb-1">{selectedColor}</div>
      <div className="flex items-center mt-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`text-yellow-400 text-base`}>
            {i <= Math.round(product.popularityOutOf5) ? "★" : "☆"}
          </span>
        ))}
        <span className="ml-2 text-sm text-gray-500">
          {product.popularityOutOf5}/5
        </span>
      </div>
    </div>
  );
};

export default ProductCard;