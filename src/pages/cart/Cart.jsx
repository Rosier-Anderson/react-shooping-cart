import React from "react";
import "./cart.css";
import CartItem from "../../components/CartItem";
import CheckoutCart from "../../components/Checkout/CheckoutCart";

export default function Cart() {
  return (
    <div className="cart-container">
      <CartItem />
      <CheckoutCart />
    </div>
  );
}
