import React from "react";
import "./cart.css";
import CartItem from "../../components/CartItem";
import CheckoutCart from "../../components/CheckoutCart";

export default function Cart() {
  return (
    <div className="cart-container">
      <CartItem />
      <CheckoutCart />
    </div>
  );
}
