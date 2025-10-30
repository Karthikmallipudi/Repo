// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email === form.email && savedUser.password === form.password) {
      setUser(savedUser);
      navigate("/account");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input className="form-control mb-2" name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <button className="btn btn-success w-100" type="submit">Login</button>
      </form>
      <p className="mt-3 text-center">
        Don’t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;
