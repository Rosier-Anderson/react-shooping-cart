// Card.js
import React, { useContext } from "react";
import "./card.css";
import useApiData from "../services/fechData/getApiData";
import { DataContext } from "../AppContext/DataContext";
let context = useContext(DataContext);
export default function Card() {
  const { data, loading, error } = useApiData(
    "https://fakestoreapi.com/products?limit=18"
  );

  if (loading) {
    return (
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const handleClickEvent = (eventId) => {
    const selectedItem = data.find((item) => item.id === eventId);

    if (selectedItem) {
      console.log(selectedItem);
    } else {
      console.error(`Item with ID ${eventId} not found.`);
    }
  };

  return (
    <>
      {data && data.length > 0 && (
        <>
          {data.map((item) => (
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
                  <button
                    type="button"
                    className="store-add-to-cart-button"
                    onClick={() => handleClickEvent(item.id)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </article>
          ))}
        </>
      )}
    </>
  );
}
