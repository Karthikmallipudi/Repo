// src/components/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form)); // Save user to localStorage
    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h4>Register</h4>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="name" placeholder="Name" onChange={handleChange} required />
        <input className="form-control mb-2" name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input className="form-control mb-2" name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <button className="btn btn-primary w-100" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
