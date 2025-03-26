import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      login(validUser);
      toast.success(`Welcome, ${validUser.username}!`, {
        autoClose: 1500, 
        onClose: () => {
          navigate("/");
          window.location.reload(); 
        }
      });

    } else {
      toast.error("Invalid email or password. Redirecting to Signup...", {
        autoClose: 2000,
        onClose: () => {
          navigate("/signup");
        }
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleLogin}>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md mb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md mb-6"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p>Don't have an account?</p>
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-500 hover:underline"
            >
              Signup here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
