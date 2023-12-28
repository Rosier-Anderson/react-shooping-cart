import React from "react";
import "./checkout.scss";

export default function CheckoutCart() {
  return (
    <>
      <aside className="checkout-cart">
        <section className="checkout-cart-summary">
          <div className="checkout-cart-info">
            <p className="checkout-cart-label">Total Items</p>
            <h3 className="checkout-cart-quantity">6</h3>
          </div>

          <div className="checkout-cart-info">
            <p className="checkout-cart-label">Total Payment</p>
            <h2 className="checkout-cart-total">$ 857.40</h2>
          </div>
        </section>
        <hr />
        <section className="checkout-cart-actions">
          <button className="checkout-cart-button">CHECKOUT</button>
          <button className="checkout-cart-button">CLEAR</button>
        </section>
      </aside>
    </>
  );
}
