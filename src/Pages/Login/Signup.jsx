import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import "./Signup.css";

const Signup = () => {
    const { setIsLoggedIn, setUserName } = useAuthContext();  // Destructure setUserName from the context
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [isSignedUp, setIsSignedUp] = useState(false); // Track if the user has signed up

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.fullName.trim()) {
            errors.fullName = "Full Name is required.";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email format.";
        }

        if (!formData.password) {
            errors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters.";
        }

        if (!formData.confirmPassword) {
            errors.confirmPassword = "Please confirm your password.";
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log("User signed up:", formData);
            setIsLoggedIn(true);
            setUserName(formData.fullName);  // Store the user's name in context
            setIsSignedUp(true);  // Set the state to indicate signup is complete
            navigate("/"); // Redirect to homepage
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                {isSignedUp ? (
                    <h2>Welcome, {formData.fullName}!</h2>  // Display user's name after signup
                ) : (
                    <h2>Create an Account</h2>  // Display signup form before signing up
                )}

                {!isSignedUp && (
                    <form onSubmit={handleSubmit} className="signup-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`input-field ${errors.fullName ? "error-border" : ""}`}
                            />
                            {errors.fullName && <p className="error-text">{errors.fullName}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`input-field ${errors.email ? "error-border" : ""}`}
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`input-field ${errors.password ? "error-border" : ""}`}
                            />
                            {errors.password && <p className="error-text">{errors.password}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`input-field ${errors.confirmPassword ? "error-border" : ""}`}
                            />
                            {errors.confirmPassword && (
                                <p className="error-text">{errors.confirmPassword}</p>
                            )}
                        </div>

                        <button type="submit" className="btn">Sign Up</button>
                    </form>
                )}

                {isSignedUp && (
                    <p className="already-account">
                        Welcome aboard! Now you can go to the <a href="/">homepage</a>.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Signup;
