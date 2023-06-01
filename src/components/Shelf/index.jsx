import Slider from "react-slick";
import PropTypes from "prop-types";
import styles from "./Shelf.module.scss";

const Shelf = ({ products }) => {
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
    ],
  };

  return (
    <div className={styles["shelf"]}>
      <Slider {...settings}>
        {products.map(
          ({ productId, link, image, brand, name, subname, price }) => (
            <div
              className={styles["shelf__item"]}
              data-id={productId}
              key={productId}
            >
              <a href={link} className={styles["shelf__item--link"]}>
                <div>
                  <img
                    src={image}
                    alt={name}
                    className={styles["shelf__item--image"]}
                  />
                </div>
                <div>
                  <p className={styles["shelf__item--brand"]}>{brand}</p>
                  <p className={styles["shelf__item--name"]}>{name}</p>
                  <p className={styles["shelf__item--subname"]}>{subname}</p>
                </div>
              </a>
              <button className={styles["shelf__item--add-to-bag"]}>
                <span>
                  {price.toLocaleString("en-US", {
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
          ),
        )}
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
