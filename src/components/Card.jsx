import React, { useState, useEffect } from "react";
import "./card.css";
export default function Card() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=18")
      .then((res) => res.json())
      .then((json) => setProductData(json));
  }, []); // Empty dependency array to run the effect only once on mount

  console.log(productData);

  return (
    <>
      {/* Assuming the  product's image, title, and price are displayed */}
      {productData && productData.length > 0 && (
        <>
          {productData.map((item) => {
            return (
              <article key={item.id} className="store-product-card">
                <img
                  src={item.image}
                  alt="Product Image"
                  className="store-product-image img-style"
                />
                <div className="store-product-details">
                  <p className="store-product-title">{item.title}</p>
                  <h2 className="store-product-price">${item.price}</h2>
                  <div className="store-product-actions">
                    <button className="store-product-more-details">
                      DETAILS
                    </button>
                    <button type="button" className="store-add-to-cart-button">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </>
      )}
    </>
  );
}
