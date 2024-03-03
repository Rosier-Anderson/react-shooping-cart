import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { removeToCart } from "../storeRedux/CartSlice";
const CartItem = () => {
  const addedProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const renderCartItems = () => {
    const handleRemove = (id) => {
      dispatch(removeToCart(id));
    };
    if (addedProduct.length === 0) {
      return <p style={style}>Your cart is empty</p>;
    }

    return addedProduct.map(({ id, image, title, price }) => (
      <div key={id} className="cart-item-wrapper">
        <article className="cart-item">
          <figure className="cart-figure">
            <img
              style={imageStyle}
              className="cart-figure-image"
              src={image}
              alt="Product Image"
            />
          </figure>
          <section>
            <h5 className="cart-item-title">{title}</h5>
            <p className="cart-item-price">Price: ${price}</p>
          </section>
          <section className="cart-item-quantity">
            <p className="cart-item-quantity-text">Qty: 4</p>
          </section>
          <section className="cart-item-actions">
            <button onClick={() => handleAdd()} className="cart-item-button">
              <IoMdAddCircle />
            </button>
            <button
              onClick={() => handleRemove(id)}
              className="cart-item-button"
            >
              <MdDelete />
            </button>
          </section>
        </article>
      </div>
    ));
  };

  return (
    <section className="cart-container-wrapper">
      <div className="cart-header">
        <h1 className="cart-title">CART</h1>
        <p className="cart-description">This is the Cart Page</p>
      </div>
      {renderCartItems()}
    </section>
  );
};

const style = {
  margin: "0 auto",
  padding: "5rem",
  fontSize: "32px",
};

const imageStyle = {
  width: "50px",
  height: "60px",
};

export default CartItem;
