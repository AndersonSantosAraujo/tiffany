import styles from "./DoubleCard.module.scss";

const DoubleCard = () => {
  return (
    <div className={styles["double-card"]}>
      <div className={styles["double-card__item"]}>
        <picture>
          <source
            media="(max-width:900px)"
            srcSet="https://media.tiffany.com/is/image/tiffanydm/QuickLink-HP-50-50-Product-StudEarrings-Mobile?$tile$&wid=720&hei=720&fmt=webp"
          />
          <source
            media="(min-width:650px)"
            srcSet="https://media.tiffany.com/is/image/tiffanydm/QuickLink-HP-50-50-Product-StudEarrings-Desktop?$tile$&wid=1088&hei=1360&fmt=webp"
          />
          <source
            media="(min-width:900px)"
            srcSet="https://media.tiffany.com/is/image/tiffanydm/QuickLink-HP-50-50-Product-StudEarrings-Mobile?$tile$&wid=720&hei=720"
          />
          <img
            src="https://media.tiffany.com/is/image/tiffanydm/QuickLink-HP-50-50-Product-StudEarrings-Desktop?$tile$&wid=1088&hei=1360&fmt=webp"
            alt="Flowers"
          />
        </picture>
        <div className={styles["double-card__text"]}>
          <h3>Gifts for Graduates</h3>
          <a href="#">Shop Now</a>
        </div>
      </div>

      <div className={styles["double-card__item"]}>
        <picture>
          <source
            media="(max-width:900px)"
            srcSet="https://media.tiffany.com/is/image/tiffanydm/T-HP_50-50-opt6-Mobile?$tile$&wid=720&hei=720&fmt=webp"
          />
          <source
            media="(min-width:650px)"
            srcSet="https://media.tiffany.com/is/image/tiffanydm/T-HP_50-50-opt6-Desktop?$tile$&wid=1088&hei=1360&fmt=webp"
          />
          <source
            media="(min-width:900px)"
            srcSet="https://media.tiffany.com/is/image/tiffanydm/T-HP_50-50-opt6-Mobile?$tile$&wid=720&hei=720"
          />
          <img
            src="https://media.tiffany.com/is/image/tiffanydm/T-HP_50-50-opt6-Desktop?$tile$&wid=1088&hei=1360"
            alt="Flowers"
          />
        </picture>
        <div className={styles["double-card__text"]}>
          <h3>How Do You Tiffany T?</h3>
          <a href="#">Shop Now</a>
        </div>
      </div>
    </div>
  );
};

export default DoubleCard;
