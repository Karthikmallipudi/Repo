// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";

function App() {
  const [user, setUser] = useState(null); // Track logged-in user

  return (
    <Router>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Account Management App</h2>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={user ? <Account user={user} setUser={setUser} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
