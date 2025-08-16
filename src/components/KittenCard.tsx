import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Kitten } from '../types/kitten';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface KittenCardProps {
  kitten: Kitten;
}

const KittenCard: React.FC<KittenCardProps> = ({ kitten }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(kitten);
    toast.success(`${kitten.name} agregado al carrito! 🐱`);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={kitten.image}
            alt={kitten.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full p-2 bg-white/80 hover:bg-white"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          {kitten.vaccinated && (
            <Badge className="absolute top-2 left-2 bg-green-500">
              Vacunado
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{kitten.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600 ml-1">4.8</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-2">{kitten.breed}</p>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{kitten.description}</p>
        
        <div className="flex justify-between items-center mb-3">
          <div className="text-xs text-gray-500">
            <span className="block">Edad: {kitten.age} meses</span>
            <span className="block">Color: {kitten.color}</span>
          </div>
          <Badge variant={kitten.gender === 'male' ? 'default' : 'secondary'}>
            {kitten.gender === 'male' ? '♂ Macho' : '♀ Hembra'}
          </Badge>
        </div>
        
        <div className="text-2xl font-bold text-primary">
          ${kitten.price.toLocaleString()}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full"
          disabled={!kitten.available}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {kitten.available ? 'Agregar al Carrito' : 'No Disponible'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default KittenCard;