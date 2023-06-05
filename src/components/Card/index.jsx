import PropTypes from "prop-types";
import styles from "./Card.module.scss";

const Card = ({ img, title, text, cta }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__image"]}>
        <img src={img} alt={title} />
      </div>
      <div className={styles["card__content"]}>
        <h3>{title}</h3>
        <p>{text}</p>
        <a href="#">
          <span>{cta}</span>
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
};

export default Card;
