import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="logo.png" alt="ShopEase Logo" style={{borderRadius:"50%", width:50}} />
      </Link>
      <nav className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div className="right">
        <Link to="/login" className="login">
          Login
        </Link>

        <Link to="/cart">
          <img
            src="cart-icon.png"
            alt="Cart"
            width={40}
            className="cart"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;