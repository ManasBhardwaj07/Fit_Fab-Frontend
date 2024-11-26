import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import Product from './Pages/Product/Product';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Checkout from './Components/Checkout/Checkout'; // Ensure the Checkout path is correct
import Cart from './Pages/Cart/Cart'; // Ensure the Cart path is correct
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import { CartProvider } from './context/cartContext'; // Ensure correct context import
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} /> {/* Corrected */}
        <Route path="/signup" element={<Signup />} /> {/* Corrected */}
        <Route path="/checkout" element={<Checkout />} /> {/* Ensuring Checkout route is correct */}
      </Routes>
    </CartProvider>
    </AuthProvider>
  );
};

export default App;
