import styles from "./GridImages.module.scss";

const GridImages = () => {
  return (
    <div className={styles["grid-images"]}>
      <h3>Shop by Category</h3>
      <p>Brilliant design and unparalleled craftsmanship.</p>
      <div className={styles["grid-images__images"]}>
        <div className={styles["grid-images__item"]}>
          <a href="#">
            <img src="https://media.tiffany.com/is/image/tiffanydm/Necklace_op3?$tile$&&fmt=webp" />
          </a>
          <a href="#" className={styles["grid-images__link"]}>
            <span>Necklaces & Pendants</span>
          </a>
        </div>

        <div className={styles["grid-images__item"]}>
          <a href="#">
            <img src="https://media.tiffany.com/is/image/tiffanydm/Earrings?$tile$&&fmt=webp" />
          </a>
          <a href="#" className={styles["grid-images__link"]}>
            <span>Earrings</span>
          </a>
        </div>

        <div className={styles["grid-images__item"]}>
          <a href="#">
            <img src="https://media.tiffany.com/is/image/tiffanydm/Rings?$tile$&&fmt=webp" />
          </a>
          <a href="#" className={styles["grid-images__link"]}>
            <span>Rings</span>
          </a>
        </div>

        <div className={styles["grid-images__item"]}>
          <a href="#">
            <img src="https://media.tiffany.com/is/image/tiffanydm/Bracelet?$tile$&&fmt=webp" />
          </a>
          <a href="#" className={styles["grid-images__link"]}>
            <span>Bracelets</span>
          </a>
        </div>

        <div className={styles["grid-images__item"]}>
          <a href="#">
            <img src="https://media.tiffany.com/is/image/tiffanydm/EngagementRings?$tile$&&fmt=webp" />
          </a>
          <a href="#" className={styles["grid-images__link"]}>
            <span>Engagement Rings</span>
          </a>
        </div>

        <div className={styles["grid-images__item"]}>
          <a href="#">
            <img src="	https://media.tiffany.com/is/image/tiffanydm/HomeDecor?$tile$&&fmt=webp" />
          </a>
          <a href="#" className={styles["grid-images__link"]}>
            <span>Home Decor</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GridImages;
