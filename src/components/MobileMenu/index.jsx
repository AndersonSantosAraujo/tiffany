import PropTypes from "prop-types";
import { X } from "phosphor-react";
import menuMobile from "../../data/menuMobile.json";
import styles from "./MobileMenu.module.scss";
import { useState, useEffect } from "react";
import Submenu from "./Submenu";

const MobileMenu = ({ showMenu, setShowMenu }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const arrData = Object.keys(menuMobile).map((section) => {
      const categories = menuMobile[section].categories;
      const mappedCategories = Object.keys(categories).map((category) => {
        const subcategories = categories[category];
        return {
          category,
          subcategories,
        };
      });
      return {
        section,
        categories: mappedCategories,
      };
    });

    setData(arrData);
  }, []);

  return showMenu ? (
    <div className={styles["menu-mobile"]}>
      <div className={styles["menu-mobile__header"]}>
        <button
          className={styles["menu-mobile__header--close"]}
          onClick={() => setShowMenu(false)}
        >
          Close
          <X size={24} color="#333" />
        </button>
      </div>

      <div className={styles["menu-mobile__body"]}>
        <ul>
          {data.map((data) => (
            <Submenu key={data.section} data={data} />
          ))}
        </ul>
      </div>

      <div className={styles["menu-mobile__footer"]}>
        <a
          href="#"
          title="Contact Us"
          className={styles["menu-mobile__footer--contact"]}
        >
          Contact Us
        </a>

        <a
          href="#"
          title="Book an Appointment"
          className={styles["menu-mobile__footer--book-appointment"]}
        >
          Book an Appointment
        </a>

        <a
          href="#"
          title="My Account"
          className={styles["menu-mobile__footer--my-account"]}
        >
          My Account
        </a>

        <a
          href="#"
          title="Store Locator"
          className={styles["menu-mobile__footer--store-locator"]}
        >
          Store Locator
        </a>
      </div>
    </div>
  ) : null;
};

MobileMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
