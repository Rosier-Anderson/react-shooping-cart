import React from "react";
import { useSelector } from "react-redux";

export default function CartItem() {
  const addedProduct = useSelector((state) => state.cart);

  return (
    <section className="cart-container-wrapper">
      <div className="cart-header">
        <h1 className="cart-title">CART</h1>
        <p className="cart-description">This is the Cart Page</p>
      </div>
      {addedProduct.map(({ id, image, title, price }) => (
        <div key={id} className="cart-item-wrapper">
          <article className="cart-item">
            <figure className="cart-figure">
              <img
                style={{
                  width: "50px",
                  height: "60px",
                }}
                className="cart-figure-image"
                src={image}
                alt="Product Image"
              />
            </figure>
            <section className="">
              <h5 className="cart-item-title">{title}</h5>
              <p className="cart-item-price">Price: ${price}</p>
            </section>
            <section className="cart-item-quantity">
              <p className="cart-item-quantity-text">Qty: 4</p>
            </section>
            <section className="cart-item-actions">
              <button className="cart-item-button">
                <svg width="20px" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="cart-item-button">
                <svg width="20px" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </section>
          </article>
        </div>
      ))}
    </section>
  );
}
