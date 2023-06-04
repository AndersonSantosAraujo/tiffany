import { useContext } from "react";
import { MinicartContext } from "../Minicart/MinicartContext";
import Slider from "react-slick";
import PropTypes from "prop-types";
import styles from "./Shelf.module.scss";

const Shelf = ({ products }) => {
  const minicartCtX = useContext(MinicartContext);

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    lazyLoad: true,
    className: "shelf-slick",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles["shelf"]}>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            className={styles["shelf__item"]}
            data-id={product.productId}
            key={product.productId}
          >
            <button className={styles["shelf__item--wishlist"]}>
              Wishlist
            </button>
            <a href={product.link} className={styles["shelf__item--link"]}>
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles["shelf__item--image"]}
                />
              </div>
              <div>
                <p className={styles["shelf__item--brand"]}>{product.brand}</p>
                <p className={styles["shelf__item--name"]}>{product.name}</p>
                <p className={styles["shelf__item--subname"]}>
                  {product.subname}
                </p>
              </div>
            </a>
            <button
              className={styles["shelf__item--add-to-bag"]}
              onClick={() => minicartCtX.addToCart(product)}
            >
              <span>
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
              <span className={styles["shelf__item--btn-name"]}>
                <span>Add to Bag</span>
                <span>Add to Bag</span>
              </span>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

Shelf.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      subname: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Shelf;
