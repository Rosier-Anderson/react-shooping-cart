import React from "react";

export default function CheckoutCart() {
  return (
    <>
      <aside className="checkout-cart">
        <section className="checkout-cart-summary">
          <h2 className="checkout-cart-title">Order Summary</h2>

          <div className="checkout-cart-info">
            <p className="checkout-cart-label">Total Items</p>
            <span className="checkout-cart-quantity">6</span>
          </div>

          <div className="checkout-cart-info">
            <p className="checkout-cart-label">Total Payment</p>
            <span className="checkout-cart-total">$ 857.40</span>
          </div>
        </section>

        <section className="checkout-cart-actions">
          <div className="checkout-cart-buttons">
            <button className="checkout-cart-button">CHECKOUT</button>
            <button className="checkout-cart-button">CLEAR</button>
          </div>
        </section>
      </aside>
    </>
  );
}
