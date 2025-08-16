import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Kitten } from '../types/kitten';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface KittenCardProps {
  kitten: Kitten;
}

const KittenCard = ({ kitten }: KittenCardProps) => {
  const { addToCart } = useCart();

  console.log('KittenCard rendered for:', kitten.name);

  const handleAddToCart = () => {
    console.log('Adding kitten to cart:', kitten.name);
    addToCart(kitten);
    toast.success(`${kitten.name} agregado al carrito! 🐱`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={kitten.image}
          alt={kitten.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        {kitten.vaccinated && (
          <div className="absolute top-2 left-2">
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Vacunado
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{kitten.name}</h3>
          <span className="text-lg font-bold text-purple-600">
            ${kitten.price.toLocaleString()}
          </span>
        </div>
        
        <div className="text-sm text-gray-600 mb-2">
          <p><span className="font-medium">Raza:</span> {kitten.breed}</p>
          <p><span className="font-medium">Edad:</span> {kitten.age}</p>
          <p><span className="font-medium">Género:</span> {kitten.gender === 'male' ? 'Macho' : 'Hembra'}</p>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {kitten.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {kitten.personality.map((trait, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
            >
              {trait}
            </span>
          ))}
        </div>
        
        <button
          onClick={handleAddToCart}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Agregar al Carrito</span>
        </button>
      </div>
    </div>
  );
};

export default KittenCard;