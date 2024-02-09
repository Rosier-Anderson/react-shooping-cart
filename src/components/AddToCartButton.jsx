function AddToCartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="store-add-to-cart-button"
    >
      ADD TO CART
    </button>
  );
}
export default AddToCartButton;
