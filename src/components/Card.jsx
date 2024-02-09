import React, { createContext, useContext, useState } from "react";
import "./card.css";
import useApiData from "../services/fechData/fetchApiData";

import AddToCartButton from "./AddToCartButton";
import { useDispatch } from "react-redux";
import { add } from "../storeRedux/CartSlice";
//const sendToCart = () => createContext(productInfo);
function Card() {
  const dispatch = useDispatch();
  const { apiData, isLoading, apiError } = useApiData(
    "https://fakestoreapi.com/products?limit=18"
  );
  if (isLoading) {
    return (
      <div className="loading-spinner" role="status">
        Loading...
      </div>
    );
  }

  if (apiError || !apiData) {
    return <p>Error isLoading data: {apiError || "Data not available."}</p>;
  }

  const handleAddToCardClick = (eventId) => {
    const selectedItem = apiData.find((item) => item.id === eventId);
    dispatch(add(selectedItem));
  };

  return (
    <>
      {apiData.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          onAddToCartClick={() => handleAddToCardClick(item.id)}
        />
      ))}
    </>
  );
}

// Extracted ProductCard component
const ProductCard = ({ item, onAddToCartClick }) => (
  <article className="store-product-card">
    <img
      src={item.image}
      alt="Product Image"
      className="store-product-image img-style"
    />
    <div className="store-product-details">
      <p className="store-product-title">{item.title}</p>
      <h2 className="store-product-price">${item.price}</h2>
      <div className="store-product-actions">
        <button className="store-product-more-details">DETAILS</button>
        <AddToCartButton onClick={onAddToCartClick} />
      </div>
    </div>
  </article>
);
// Extracted AddToCartButton component

export default Card;
