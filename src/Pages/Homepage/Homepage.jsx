import React, { useEffect } from 'react';  // Added import for useEffect
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import Hoodie from "../../assets/Clothes/Hoodie.jpg";
import jogger from "../../assets/Clothes/jogger.jpg";
import Blazzer from "../../assets/Clothes/Blazzer.jpg";
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

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/"); // Redirect to login page if not authenticated
    }
  }, [navigate]);

  const handleShopNowClick = () => {
    navigate('/products');  // Redirects to /products route
  };
  
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fit&Fab</h1>
          <p>Your one-stop destination for stylish and affordable fashion.</p>
          <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="intro">
        <h2>Featured Collections</h2>
        <p>Explore our best sellers and new arrivals!</p>
        <div className="product-grid">
          <div className="product-card">
            <img src={TshirtImage} alt="T-Shirts" />
            <p>T-Shirts</p>
          </div>
          <div className="product-card">
            <img src={Shirts} alt="Shirts" />
            <p>Shirts</p>
          </div>
          <div className="product-card">
            <img src={JeansImage} alt="Jeans" />
            <p>Jeans</p>
          </div>
          <div className="product-card">
            <img src={JacketImage} alt="Jackets" />
            <p>Jackets</p>
          </div>
          <div className="product-card">
            <img src={Hoodie} alt="Hoodies" />
            <p>Hoodies</p>
          </div>
          <div className="product-card">
            <img src={sweaterImage} alt="Sweaters" />
            <p>Sweaters</p>
          </div>
          <div className="product-card">
            <img src={ShortsImage} alt="Shorts" />
            <p>Shorts</p>
          </div>
          <div className="product-card">
            <img src={jogger} alt="Joggers" />
            <p>Joggers</p>
          </div>
          <div className="product-card">
            <img src={CargoImage} alt="Cargo" />
            <p>Cargo</p>
          </div>
          <div className="product-card">
            <img src={Blazzer} alt="Blazers" />
            <p>Blazers</p>
          </div>
          <div className="product-card">
            <img src={Skirts} alt="Skirts" />
            <p>Skirts</p>
          </div>
          <div className="product-card">
            <img src={DressesImage} alt="Dresses" />
            <p>Dresses</p>
          </div>
          <div className="product-card">
            <img src={poloShirtsImage} alt="Polo Shirts" />
            <p>Polo Shirts</p>
          </div>
          <div className="product-card">
            <img src={Trackpants} alt="Track Pants" />
            <p>Track Pants</p>
          </div>
          <div className="product-card">
            <img src={Overcoat} alt="Overcoats" />
            <p>Overcoats</p>
          </div>
          <div className="product-card">
            <img src={Sweatpants} alt="Sweatpants" />
            <p>Sweatpants</p>
          </div>
          <div className='product-card'>
            <img src={Sneakers} alt="Sneakers" />
            <p>Sneakers</p>
          </div>
          <div className='product-card'>
            <img src={CosmeticsImage} alt="Cosmetics" />
            <p>Cosmetics</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="benefit-item">
          <span>🚚 Free Shipping</span>
        </div>
        <div className="benefit-item">
          <span>📞 24/7 Support</span>
        </div>
        <div className="benefit-item">
          <span>💰 Easy Returns</span>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
