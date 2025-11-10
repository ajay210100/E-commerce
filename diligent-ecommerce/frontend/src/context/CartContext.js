import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context
const CartContext = createContext();

// 2. Create a custom hook for easy access
export const useCart = () => {
  return useContext(CartContext);
};

// 3. Create the Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Array of { product, quantity }

  // Add item to cart (or update quantity)
  const addToCart = (productToAdd) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product._id === productToAdd._id);

      if (existingItem) {
        // If item exists, update its quantity
        return prevItems.map(item =>
          item.product._id === productToAdd._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item is new, add it to the cart
        return [...prevItems, { product: productToAdd, quantity: 1 }];
      }
    });
    console.log('Added to cart:', productToAdd.name);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      return prevItems.filter(item => item.product._id !== productId);
    });
    console.log('Removed from cart:', productId);
  };

  // Value to be passed to consumers
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};