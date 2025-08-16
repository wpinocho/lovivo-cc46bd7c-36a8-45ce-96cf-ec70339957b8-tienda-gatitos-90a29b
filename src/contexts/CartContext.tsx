import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Kitten } from '../types/kitten';

interface CartItem extends Kitten {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (kitten: Kitten) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  console.log('CartProvider rendered with items:', items);

  const addToCart = (kitten: Kitten) => {
    console.log('Adding to cart:', kitten);
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === kitten.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === kitten.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...kitten, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    console.log('Removing from cart:', id);
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    console.log('Updating quantity:', id, quantity);
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    console.log('Clearing cart');
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};