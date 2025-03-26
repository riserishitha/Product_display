import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Signup = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find((user) => user.email === email);

    if (userExists) {
      toast.error("User already exists. Please login.");
      navigate("/login");
    } else {
      const newUser = { username, email, password };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      login(newUser);

      toast.success("Signup successful! Redirecting to Home.");

      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <form onSubmit={handleSignup}>
          <label className="block mb-2">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md mb-4"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

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
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Signup
          </button>

          <div className="mt-4 text-center">
            <p>Already have an account?</p>
            <button
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:underline"
            >
              Login here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
