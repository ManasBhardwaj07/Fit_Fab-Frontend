import React, { createContext, useContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Custom hook to use CartContext
export const useCartContext = () => useContext(CartContext);

// CartProvider component to wrap around your app and provide context values
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(
        (item) => item.id === product.id && item.size === product.size
      );

      if (existingProduct) {
        // If the same product with the same size exists, update quantity
        return prevItems.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add new product with size to cart
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id, size) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === id && (!size || item.size === size))
      )
    );
  };

  const updateQuantity = (id, newQuantity, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && (!size || item.size === size)
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
