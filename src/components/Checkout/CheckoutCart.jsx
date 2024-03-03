import React from "react";
import "./checkout.scss";
import { useSelector } from "react-redux";

export default function CheckoutCart() {
  const cartQuantity = useSelector((state) => state.cart.length);
  return (
    <>
      {cartQuantity === 0 ? null : (
        <aside className="checkout-cart">
          <section className="checkout-cart-summary">
            <div className="checkout-cart-info">
              <p className="checkout-cart-label">Total Items</p>
              <h3 className="checkout-cart-quantity">{cartQuantity}</h3>
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
      )}
    </>
  );
}
