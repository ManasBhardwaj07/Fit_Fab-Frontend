import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import './Product.css';

// Import local images
import Hoodie from '../../assets/Clothes/Hoodie.jpg';
import jogger from '../../assets/Clothes/jogger.jpg';
import Blazzer from '../../assets/Clothes/Blazzer.jpg';
import ShortsImage from '../../assets/Clothes/Shorts.jpg';
import CargoImage from '../../assets/Clothes/Cargo.jpg';
import sweaterImage from '../../assets/Clothes/sweater.jpg';
import TshirtImage from '../../assets/Clothes/Tshirt.jpg';
import JeansImage from '../../assets/Clothes/jeans.jpg';
import JacketImage from '../../assets/Clothes/jacket.jpg';
import poloShirtsImage from '../../assets/Clothes/poloShirts.jpg';
import CosmeticsImage from '../../assets/Clothes/Cosmetics.jpg';
import DressesImage from '../../assets/Clothes/Dresses.jpg';
import Overcoat from '../../assets/Clothes/Overcoat.jpg';
import Shirts from '../../assets/Clothes/Shirts.jpg';
import Sweatpants from '../../assets/Clothes/Sweatpants.jpg';
import Trackpants from '../../assets/Clothes/Trackpants.jpg';
import Sneakers from '../../assets/Clothes/Sneakers.jpg';
import Skirts from '../../assets/Clothes/Skirts.jpg';

// Main Component
const Product = () => {
  const { addToCart } = useCartContext();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null); // Tracks the product being added to the cart
  const [selectedSize, setSelectedSize] = useState(''); // Tracks the size selected for the product
  const [addedToCart, setAddedToCart] = useState({}); // Tracks the state of added products

 // Products array with all items, updated to use imported images
 const products = [
  { id: 'hoodie', name: 'Hoodie', price: 1499, image: Hoodie, description: 'A stylish and comfortable hoodie, perfect for casual wear.' },
  { id: 'Overcoat', name: 'Overcoat', price: 1499, image: Overcoat, description: 'A stylish and comfortable overcoat for chilly weather.' },
  { id: 'Shirts', name: 'Shirts', price: 1499, image: Shirts, description: 'Comfortable and stylish shirt for everyday use.' },
  { id: 'poloShirts', name: 'Polo Shirts', price: 1499, image: poloShirtsImage, description: 'Classic polo shirt for a casual yet stylish look.' },
  { id: 'sweater', name: 'Sweater', price: 699, image: sweaterImage, description: 'Cozy sweater for those cooler days.' },
  { id: 'Blazzer', name: 'Blazzer', price: 2499, image: Blazzer, description: 'Smart blazer for formal occasions.' },
  { id: 'jacket', name: 'Jacket', price: 2999, image: JacketImage, description: 'Stylish jacket to stay warm in cold weather.' },
  { id: 'jeans', name: 'Jeans', price: 1999, image: JeansImage, description: 'Classic denim jeans for everyday comfort.' },
  { id: 'Jogger', name: 'Jogger', price: 599, image: jogger, description: 'Comfortable joggers for exercise or casual wear.' },
  { id: 'Sweatpants', name: 'Sweatpants', price: 599, image: Sweatpants, description: 'Soft sweatpants for lounging or working out.' },
  { id: 'trackpants', name: 'Track pants', price: 599, image: Trackpants, description: 'Perfect for sports or casual wear.' },
  { id: 'cargo', name: 'Cargo', price: 999, image: CargoImage, description: 'Cargo pants for a rugged look and feel.' },
  { id: 'Shorts', name: 'Shorts', price: 299, image: ShortsImage, description: 'Casual shorts for warm days.' },
  { id: 'tshirt', name: 'T-Shirt', price: 399, image: TshirtImage, description: 'Classic t-shirt with soft fabric for all-day comfort.' },
  { id: 'sneakers', name: 'Sneakers', price: 8999, image: Sneakers, description: 'Stylish sneakers to complete any outfit.' },
  { id: 'Skirt', name: 'Skirt', price: 999, image: Skirts, description: 'A fashionable skirt for a chic look.' },
  { id: 'Dresses', name: 'Dresses', price: 1999, image: DressesImage, description: 'Elegant dress for formal events.' },
  { id: 'Cosmetics', name: 'Cosmetics', price: 1499, image: CosmeticsImage, description: 'High-quality cosmetics for your daily beauty routine.' },
];

  // Handle Navigation to Product Details Page
  const handleImageClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  // Open Modal for Size Selection
  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
  };

  // Add Product to Cart with Size
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }
    addToCart({ ...selectedProduct, size: selectedSize });
    setAddedToCart({ ...addedToCart, [selectedProduct.id]: true });
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [selectedProduct.id]: false }));
    }, 1500);
    closeModal(); // Close modal after adding to cart
  };

  // Close Modal
  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedSize('');
  };

  return (
    <div className="product-container">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => handleImageClick(product.id)}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>₹{product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            <button
              className={`add-to-cart-btn ${addedToCart[product.id] ? 'added' : ''}`}
              onClick={() => handleAddToCartClick(product)}
            >
              {addedToCart[product.id] ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      {/* Size Selection Modal */}
      {selectedProduct && (
        <div className="size-modal">
          <div className="size-modal-content">
            <h3>Select Size for {selectedProduct.name}</h3>
            <div className="size-options">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="modal-actions">
              <button className="confirm-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="close-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
