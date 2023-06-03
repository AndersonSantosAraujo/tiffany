import { useContext } from "react";
import { MinicartContext } from "../MinicartContext";
import PropTypes from "prop-types";
import styles from "./ProductItem.module.scss";

const ProductItem = ({
  brand,
  image,
  link,
  name,
  price,
  productId,
  quantity,
  subname,
}) => {
  const minicartCtX = useContext(MinicartContext);

  return (
    <li className={styles["product-item"]}>
      <a href={link}>
        <div className={styles["product-item__image"]}>
          <img src={image} alt={name} />
        </div>
        <div className={styles["product-item__content"]}>
          <div>
            <p className={styles["product-item__content--name"]}>
              {brand}:{name}
            </p>
            <p className={styles["product-item__content--price"]}>
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>

          <div>
            <p className={styles["product-item__content--quantity"]}>
              Quantity {quantity}
            </p>
            <button
              onClick={() => minicartCtX.removeToCart(productId)}
              className={styles["product-item__content--remove"]}
            >
              Remove
            </button>
          </div>
        </div>
      </a>
    </li>
  );
};

ProductItem.propTypes = {
  brand: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  subname: PropTypes.string,
};

export default ProductItem;
