import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./SubmenuDesktop.module.scss";
import classNames from "classnames";

const SubmenuDesktop = ({ data }) => {
  const [categories, setCategories] = useState(false);

  return (
    <li
      className={styles["submenu"]}
      onMouseEnter={() => setCategories(true)}
      onMouseLeave={() => setCategories(false)}
    >
      <span>{data.section}</span>
      <div
        className={classNames(styles["submenu__categories"], {
          [styles["show"]]: categories,
        })}
      >
        {categories ? (
          <ul className={styles["submenu__categories--body"]}>
            {data.categories.map(({ category, subcategories }) => {
              if (category === "image") {
                return (
                  <li
                    key={subcategories[0].src}
                    className={styles["submenu__categories--image"]}
                  >
                    <img
                      src={subcategories[0].src}
                      alt={subcategories[0].text}
                      width={584}
                      height={304}
                    />
                    <p>{subcategories[0].text}</p>
                    <a href="#">{subcategories[0].cta}</a>
                  </li>
                );
              } else {
                return (
                  <li
                    key={category}
                    className={styles["submenu__categories--item"]}
                  >
                    <span>{category}</span>
                    <ul>
                      {subcategories.map((subcategory) => {
                        if (
                          typeof subcategory === "object" &&
                          subcategory.link
                        ) {
                          return (
                            <li
                              key={subcategory.link}
                              className={styles["submenu__categories--explore"]}
                            >
                              <a href="#">{subcategory.link}</a>
                            </li>
                          );
                        } else {
                          return (
                            <li key={subcategory}>
                              <a href="#">{subcategory}</a>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </li>
                );
              }
            })}
          </ul>
        ) : null}
      </div>
    </li>
  );
};

SubmenuDesktop.propTypes = {
  data: PropTypes.shape({
    section: PropTypes.string,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        subcategories: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.string),
          PropTypes.arrayOf(
            PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.shape({
                link: PropTypes.string.isRequired,
              }),
              PropTypes.shape({
                src: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
                cta: PropTypes.string.isRequired,
              }),
            ]),
          ),
        ]).isRequired,
      }),
    ),
  }),
};

export default SubmenuDesktop;
