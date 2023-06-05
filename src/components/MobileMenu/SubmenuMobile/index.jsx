import PropTypes from "prop-types";
import styles from "./SubmenuMobile.module.scss";
import { useState } from "react";
import classNames from "classnames";

const SubmenuMobile = ({ data }) => {
  const [categories, setCategories] = useState(false);

  return (
    <li className={styles["submenu"]}>
      <span onClick={() => setCategories(!categories)}>{data.section}</span>
      <div
        className={classNames(styles["submenu__categories"], {
          [styles["show"]]: categories,
        })}
      >
        {categories ? (
          <>
            <div className={styles["submenu__categories--header"]}>
              <button onClick={() => setCategories(!categories)}>Back</button>
              <h3>{data.section} </h3>
            </div>

            <ul className={styles["submenu__categories--body"]}>
              {data.categories.map(({ category, subcategories }) => (
                <li
                  key={category}
                  className={styles["submenu__categories--item"]}
                >
                  <span>{category}</span>
                  <ul>
                    {subcategories.map((subcategory) => {
                      if (typeof subcategory === "object" && subcategory.link) {
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
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </li>
  );
};

SubmenuMobile.propTypes = {
  data: PropTypes.shape({
    section: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        subcategories: PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({ link: PropTypes.string.isRequired }),
          ]),
        ).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default SubmenuMobile;
