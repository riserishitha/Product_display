// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const auth = useAuth();  
//   const isAuthenticated = auth?.isAuthenticated || false;

//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem("cart");
//   };

//   const addToCart = (product) => {
//     if (!isAuthenticated) {
//       console.warn("User must be logged in to add items to the cart.");
//       return;
//     }

//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       const updatedCart = cart.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     setCart(updatedCart);
//   };

//   const updateQuantity = (id, quantity) => {
//     const updatedCart = cart.map((item) =>
//       item.id === id ? { ...item, quantity } : item
//     );
//     setCart(updatedCart);
//   };

//   const totalPrice = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         setCart,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         totalPrice,
//         clearCart
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Sync cart with localStorage on initialization
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      const storedCart = JSON.parse(localStorage.getItem(`cart_${currentUser.email}`)) || [];
      setCart(storedCart);
    }
  }, []);

  // Sync localStorage whenever cart changes
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
