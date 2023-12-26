import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

import "./navigation.css";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  const isActive = ({ isActive }) => {
    return `link${isActive ? " unselected" : " "}`;
  };
  return (
    <header className="nav-header">
      <nav>
        <ul className="nav-items">
          <li className="nav-list-items">
            <NavLink className={isActive} to="/">
              Store
            </NavLink>
          </li>
          <li className="nav-list-items">
            <NavLink className={isActive} to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-list-items">
            <HiOutlineShoppingCart />
            <NavLink className={isActive} to="/cart">
              Cart(0)
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
