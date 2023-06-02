import { useContext } from "react";
import { MinicartContext } from "../Minicart/MinicartContext";
import Minicart from "../Minicart";
import { CaretDown, X } from "phosphor-react";
import styles from "./Header.module.scss";
import classNames from "classnames";
// import menuDesktop from "../../data/menuDesktop.json";

const Header = () => {
  const minicartCtx = useContext(MinicartContext);

  return (
    <header className={styles["header"]}>
      <div className={styles["header__topbar"]}>
        <div className={styles["header__topbar--info"]}>
          <p>
            Purchases made on this site will ship to U.S. addresses only. Do you
            want to shop the U.S. site?
          </p>
        </div>

        <div className={styles["header__topbar--location"]}>
          <a href="#">Shop the U.S. site</a>
          <span> Or </span>
          <a href="#">
            Choose location <CaretDown size={12} weight="fill" />
          </a>
        </div>

        <button className={styles["header__topbar--close"]}>
          Close
          <X size={24} weight="thin" />
        </button>
      </div>

      <div className={styles["header__midbar"]}>
        <div className={styles["header__midbar-left"]}>
          <a
            href="#"
            title="Find"
            className={styles["header__midbar-left--find"]}
          >
            Find
          </a>
          <a
            href="#"
            title="Store"
            className={styles["header__midbar-left--store"]}
          >
            Store
          </a>
          <a
            href="#"
            title="Contact Us"
            className={styles["header__midbar-left--contact"]}
          >
            Contact Us
          </a>
        </div>

        <div className={styles["header__midbar-center"]}>
          <a href="#" title="Logo Tiffany & Co.">
            <img
              src="https://media.tiffany.com/is/content/tiffanydm/tiffco-logo-2?$tile$&wid=1267&hei=3106"
              alt="Logo Tiffany & Co."
            />
          </a>
        </div>

        <div className={styles["header__midbar-right"]}>
          <a
            href="#"
            title="Book an Appointment"
            className={styles["header__midbar-right--book-appointment"]}
          >
            Book an Appointment
          </a>
          <a
            href="#"
            title="SignIn"
            className={styles["header__midbar-right--signin"]}
          >
            SignIn
          </a>
          <a
            href="#"
            title="Favorites"
            className={styles["header__midbar-right--favorites"]}
          >
            Favorites
          </a>
          <a
            href="#"
            title="Shopping Bag"
            className={classNames(
              styles["header__midbar-right--shopping-bag"],
              {
                [styles["header__midbar-right--shopping-bag-full"]]:
                  minicartCtx.items.length > 0,
              },
            )}
            onMouseEnter={() => minicartCtx.setShowMinicart(true)}
            onMouseLeave={() => minicartCtx.setShowMinicart(false)}
          >
            Shopping Bag
            <span
              className={styles["header__midbar-right--shopping-bag-quantity"]}
            >
              {minicartCtx.qtItems}
            </span>
          </a>
          <Minicart />
        </div>
      </div>

      <nav className={styles["header__navbar"]}>
        <ul>
          <li>
            <a href="#">Jewelry</a>
          </li>
          <li>
            <a href="#">Gifts</a>
          </li>
          <li>
            <a href="#">Love & Engagement</a>
          </li>
          <li>
            <a href="#">Fine Watches</a>
          </li>
          <li>
            <a href="#">Home & Accessories</a>
          </li>
          <li>
            <a href="#">Fragrance</a>
          </li>
          <li>
            <a href="#">Men’s</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
