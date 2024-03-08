import PropTypes from "prop-types";
import "./ProductItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

const ProductItem = ({ productItem }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const filteredCart = cartItems.find(
    (cartItem) => cartItem._id === productItem._id
  );
  const originalPrice = productItem.price.current;
  const discountPercentage = productItem.price.discount;
  const discountedPrice = originalPrice-(originalPrice*discountPercentage/100)

  return (
    <div className="product-item glide__slide glide__slide--active">
      <div className="product-image">
        <a href="#">
          <img src={productItem.img[0]} alt="" className="img1" />
          <img src={productItem.img[1]} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
          {productItem.name}
        </a>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill" />
          </li>
          <li>
            <i className="bi bi-star-fill" />
          </li>
          <li>
            <i className="bi bi-star-fill" />
          </li>
          <li>
            <i className="bi bi-star-fill" />
          </li>
          <li>
            <i className="bi bi-star-half" />
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">
            {discountedPrice.toFixed(2)}
          </strong>
          <span className="old-price">
            {originalPrice.toFixed(2)}
          </span>
        </div>
        <span className="product-discount">-%{productItem.price.discount}</span>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={() => addToCart({
              ...productItem,
              price : discountedPrice}
            )}
            disabled={filteredCart}
          >
            <i className="bi bi-basket-fill" />
          </button>
          <button>
            <i className="bi bi-heart-fill" />
          </button>
          <Link to={`product/${productItem._id}`} className="product-link">
            <i className="bi bi-eye-fill" />
          </Link>
          <a href="#">
            <i className="bi bi-share-fill" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  productItem: PropTypes.object,
  setCartItems: PropTypes.func,
  cartItems: PropTypes.array,
};
