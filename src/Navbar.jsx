import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: "relative", zIndex: 10 }}>
      <div className="container-fluid">
      
        <NavLink className="navbar-brand" to="/">
          <h1 style={{ color: "purple" }}><strong>BEYOND INTERACTION</strong></h1>
        </NavLink>

      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
      
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="menu_active" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="menu_active" to="/service">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="menu_active" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="menu_active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;