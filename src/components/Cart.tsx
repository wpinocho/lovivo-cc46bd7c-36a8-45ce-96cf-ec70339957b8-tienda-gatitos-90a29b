import React from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Tu carrito está vacío');
      return;
    }
    toast.success('¡Gracias por tu compra! Procesando pedido... 🎉');
    clearCart();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Carrito de Compras</SheetTitle>
          <SheetDescription>
            {cartItems.length === 0 ? 'Tu carrito está vacío' : `${getTotalItems()} gatito(s) en tu carrito`}
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">No hay gatitos en tu carrito</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.kitten.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img
                      src={item.kitten.image}
                      alt={item.kitten.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.kitten.name}</h4>
                      <p className="text-sm text-gray-600">{item.kitten.breed}</p>
                      <p className="font-bold">${item.kitten.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.kitten.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.kitten.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(item.kitten.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold">${getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="space-y-2">
                  <Button onClick={handleCheckout} className="w-full">
                    Proceder al Pago
                  </Button>
                  <Button onClick={clearCart} variant="outline" className="w-full">
                    Vaciar Carrito
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;