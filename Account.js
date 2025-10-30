// src/components/Account.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Account({ user, setUser }) {
  const [editUser, setEditUser] = useState(user);
  const navigate = useNavigate();

  const handleChange = (e) => setEditUser({ ...editUser, [e.target.name]: e.target.value });

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(editUser));
    setUser(editUser);
    alert("Account updated!");
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h4>My Account</h4>
      <input className="form-control mb-2" name="name" value={editUser.name} onChange={handleChange} />
      <input className="form-control mb-2" name="email" value={editUser.email} onChange={handleChange} />
      <input className="form-control mb-2" name="password" type="password" value={editUser.password} onChange={handleChange} />
      <button className="btn btn-primary w-100 mb-2" onClick={handleSave}>Save Changes</button>
      <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Account;
