import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

import "./navigation.css";
export default function Navigation() {
  return (
    <header className="nav-header">
      <nav>
        <ul className="nav-items">
          <li className="nav-list-items">
            <a className="link" href="/store">
              Store
            </a>
          </li>
          <li className="nav-list-items">
            <a className="link" href="/about">
              About
            </a>
          </li>
          <li className="nav-list-items">
            <HiOutlineShoppingCart />
            <a className="link" href="/cart">
              Cart(0)
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
