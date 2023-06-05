import PropTypes from "prop-types";
import styles from "./Banner.module.scss";

const Banner = ({ srcMobile, srcDesktop, title, text, cta, textAlign }) => {
  const alignStyle = textAlign === "right" ? { left: "70%" } : { left: "4%" };

  return (
    <div className={styles["banner"]}>
      <a href="#">
        <picture>
          <source
            type="image/webp"
            media="(max-width: 900px)"
            srcSet={srcMobile}
          />
          <img src={srcDesktop} alt="Love Your Way" />
        </picture>
      </a>

      <div className={styles["banner__content"]} style={alignStyle}>
        <h3>{title}</h3>
        <p>{text}</p>
        <a href="#">
          <span>{cta}</span>
        </a>
      </div>
    </div>
  );
};

Banner.propTypes = {
  srcMobile: PropTypes.string.isRequired,
  srcDesktop: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
};

export default Banner;
