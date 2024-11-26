import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext); // This will be used to access the context in components
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState(""); // Define userName state

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userName, setUserName }}>
            {children}
        </AuthContext.Provider>
    );
};
