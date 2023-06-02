import { useContext } from "react";
import { MinicartContext } from "./MinicartContext";
import ProductItem from "./ProductItem";
import styles from "./Minicart.module.scss";
import classNames from "classnames";

const Minicart = () => {
  const minicartCtx = useContext(MinicartContext);

  return (
    <div
      className={classNames(styles["minicart-container"], {
        [styles["show"]]: minicartCtx.showMinicart,
      })}
    >
      <div className={styles["overlay"]}></div>
      <div
        className={styles["minicart"]}
        onMouseEnter={() => minicartCtx.setShowMinicart(true)}
        onMouseLeave={() => minicartCtx.setShowMinicart(false)}
      >
        <span className={styles["minicart__header"]}></span>

        <div className={styles["minicart__body"]}>
          <div className={styles["minicart__content"]}>
            <p className={styles["minicart__content--paragraph"]}>
              To speed up the checkout process, sign in now.
            </p>
            <a href="#" className={styles["minicart__content--signin"]}>
              Sign In
            </a>
            <ul>
              {minicartCtx.items.map((item) => (
                <ProductItem key={item.productId} {...item} />
              ))}
            </ul>
            <span className={styles["minicart__content--delivery"]}>
              Standard Delivery: $0.00
            </span>
            <a href="#" className={styles["minicart__content--view-bag"]}>
              View Bag
            </a>
            <a href="#" className={styles["minicart__content--btn"]}>
              <span>
                Estimated Total:{" "}
                {minicartCtx.total.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
              <span>Checkout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minicart;
