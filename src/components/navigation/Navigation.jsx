import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

import "./navigation.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navigation() {
  const cartQuantity = useSelector((state) => state.cart.length);
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
              Cart( {cartQuantity})
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
