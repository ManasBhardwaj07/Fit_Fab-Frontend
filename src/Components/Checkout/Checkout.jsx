import React, { useState } from "react";
import { useCartContext } from '../../context/cartContext'; // Using useCartContext for cart data
import "./Checkout.css";

const Checkout = () => {
    const { cartItems } = useCartContext(); // Get cart items from context
    const [shippingDetails, setShippingDetails] = useState({
        name: '',
        address: '',
        city: '',
        zip: '',
        country: '',
    });
    const [orderPlaced, setOrderPlaced] = useState(false); // State to track order status
    const [paymentMethod, setPaymentMethod] = useState('COD'); // State to track payment method

    // Function to calculate the total amount
    const calculateTotalAmount = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails({ ...shippingDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order submitted:', { shippingDetails, cartItems, paymentMethod });
        setOrderPlaced(true); // Set order placed state to true
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>

            {orderPlaced ? ( // Display order confirmation if orderPlaced is true
                <div className="order-confirmation">
                    <h3>Order Placed!</h3>
                    <p>Thank you for your order! Your items will be shipped to:</p>
                    <ul>
                        <li><strong>Name:</strong> {shippingDetails.name}</li>
                        <li><strong>Address:</strong> {shippingDetails.address}, {shippingDetails.city}, {shippingDetails.zip}, {shippingDetails.country}</li>
                    </ul>
                    <p>Payment Method: {paymentMethod}</p>
                    <p>Total Amount: ₹{calculateTotalAmount()}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="shipping-form">
                    <h3>Shipping Information</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={shippingDetails.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={shippingDetails.address}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={shippingDetails.city}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="zip"
                        placeholder="Zip Code"
                        value={shippingDetails.zip}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={shippingDetails.country}
                        onChange={handleChange}
                        required
                    />

                    <h3>Cart Summary</h3>
                    <div className="cart-summary">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item.id} className="cart-summary-item">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <p><strong>{item.name}</strong></p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ₹{item.price.toFixed(2)}</p>
                                        <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                        <h4>Total Amount: ₹{calculateTotalAmount()}</h4>
                    </div>

                    <h3>Payment Information</h3>
                    <div className="payment-method">
                        <label>
                            <input
                                type="checkbox"
                                checked={paymentMethod === 'COD'}
                                onChange={() => setPaymentMethod('COD')}
                            />
                            Cash on Delivery
                        </label>
                    </div>
                    <button type="submit" className="checkout-button">Place Order</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;
