import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ link, name, marginTop = 10, marginBottom = 10 }) => {
  return (
    <div
      className={styles["wrapper-btn"]}
      style={{ marginTop: marginTop, marginBottom: marginBottom }}
    >
      <a href={link} className={styles["wrapper-btn__link"]}>
        <span>{name}</span>
      </a>
    </div>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
};

export default Button;
