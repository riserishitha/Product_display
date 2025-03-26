import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { CartProvider } from "./context/CartContext";
import App from './App.jsx'
import { AuthProvider } from "./context/AuthContext"; 


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
  <CartProvider>
    <App />
    </CartProvider>
    </AuthProvider>
  </BrowserRouter>,
)