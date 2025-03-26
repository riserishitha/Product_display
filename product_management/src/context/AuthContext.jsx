import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";

    if (savedUser && loggedInStatus) {
      setUser(savedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (newUser) => {
    setUser(newUser);           
    setIsAuthenticated(true);

    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
