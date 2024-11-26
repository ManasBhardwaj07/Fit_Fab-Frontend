// src/pages/ProductDetail/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // Optional: Add styling

// Dummy data; replace with actual data-fetching logic if needed
const productData = {
    hoodie: {
      id: 'hoodie',
      name: 'Hoodie',
      price: 1499,
      description: 'A stylish and comfortable hoodie, perfect for casual wear.',
      image: '/assets/Clothes/Hoodie.jpg'
    },
    overcoat: {
      id: 'overcoat',
      name: 'Overcoat',
      price: 1499,
      description: 'A stylish and comfortable overcoat for chilly weather.',
      image: '/assets/Clothes/Overcoat.jpg'
    },
    shirts: {
      id: 'shirts',
      name: 'Shirts',
      price: 1499,
      description: 'Comfortable and stylish shirt for everyday use.',
      image: '/assets/Clothes/Shirts.jpg'
    },
    polos: {
      id: 'poloShirts',
      name: 'Polo Shirts',
      price: 1499,
      description: 'Classic polo shirt for a casual yet stylish look.',
      image: '/assets/Clothes/poloShirts.jpg'
    },
    sweater: {
      id: 'sweater',
      name: 'Sweater',
      price: 699,
      description: 'Cozy sweater for those cooler days.',
      image: '/assets/Clothes/sweater.jpg'
    },
    blazer: {
      id: 'blazer',
      name: 'Blazer',
      price: 2499,
      description: 'Smart blazer for formal occasions.',
      image: '/assets/Clothes/Blazzer.jpg'
    },
    jacket: {
      id: 'jacket',
      name: 'Jacket',
      price: 2999,
      description: 'Stylish jacket to stay warm in cold weather.',
      image: '/assets/Clothes/jacket.jpg'
    },
    jeans: {
      id: 'jeans',
      name: 'Jeans',
      price: 1999,
      description: 'Classic denim jeans for everyday comfort.',
      image: '/assets/Clothes/jeans.jpg'
    },
    jogger: {
      id: 'jogger',
      name: 'Jogger',
      price: 599,
      description: 'Comfortable joggers for exercise or casual wear.',
      image: '/assets/Clothes/jogger.jpg'
    },
    sweatpants: {
      id: 'sweatpants',
      name: 'Sweatpants',
      price: 599,
      description: 'Soft sweatpants for lounging or working out.',
      image: '/assets/Clothes/Sweatpants.jpg'
    },
    trackpants: {
      id: 'trackpants',
      name: 'Track pants',
      price: 599,
      description: 'Perfect for sports or casual wear.',
      image: '/assets/Clothes/Trackpants.jpg'
    },
    cargo: {
      id: 'cargo',
      name: 'Cargo',
      price: 999,
      description: 'Cargo pants for a rugged look and feel.',
      image: '/assets/Clothes/Cargo.jpg'
    },
    shorts: {
      id: 'shorts',
      name: 'Shorts',
      price: 299,
      description: 'Casual shorts for warm days.',
      image: '/assets/Clothes/Shorts.jpg'
    },
    tshirt: {
      id: 'tshirt',
      name: 'T-Shirt',
      price: 399,
      description: 'Classic t-shirt with soft fabric for all-day comfort.',
      image: '/assets/Clothes/Tshirt.jpg'
    },
    sneakers: {
      id: 'sneakers',
      name: 'Sneakers',
      price: 8999,
      description: 'Stylish sneakers to complete any outfit.',
      image: '/assets/Clothes/Sneakers.jpg'
    },
    skirt: {
      id: 'skirt',
      name: 'Skirt',
      price: 999,
      description: 'A fashionable skirt for a chic look.',
      image: '/assets/Clothes/Skirts.jpg'
    },
    dresses: {
      id: 'dresses',
      name: 'Dresses',
      price: 1999,
      description: 'Elegant dress for formal events.',
      image: '/assets/Clothes/Dresses.jpg'
    },
    cosmetics: {
      id: 'cosmetics',
      name: 'Cosmetics',
      price: 1499,
      description: 'High-quality cosmetics for your daily beauty routine.',
      image: '/assets/Clothes/Cosmetics.jpg'
    }
  };

const ProductDetail = () => {
  const { productId } = useParams(); // Access productId from URL
  const product = productData[productId]; // Fetch product based on productId

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
