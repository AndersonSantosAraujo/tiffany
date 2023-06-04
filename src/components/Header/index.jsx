import { useContext, useState, useEffect } from "react";
import { MinicartContext } from "../Minicart/MinicartContext";
import Minicart from "../Minicart";
import { CaretDown, X } from "phosphor-react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import MobileMenu from "../MobileMenu";
// import menuDesktop from "../../data/menuDesktop.json";

const Header = () => {
  const [prevScroll, setPrevScroll] = useState(window.scrollY);
  const [navbarTop, setNavbarTop] = useState("0");
  const [showMenu, setShowMenu] = useState(true);
  const minicartCtx = useContext(MinicartContext);

  useEffect(() => {
    const handleScroll = () => {
      const isMediumScreen = window.innerWidth < 1024;
      const isMobileScreen = window.innerWidth < 600;
      const topbar = isMobileScreen ? 98 : isMediumScreen ? 78 : 48;
      const header = isMobileScreen ? 213 : isMediumScreen ? 138 : 142;

      const currentScroll = window.scrollY;
      if (prevScroll > currentScroll) {
        if (currentScroll <= topbar + 2) {
          setNavbarTop("0px");
        } else {
          setNavbarTop(`-${topbar}px`);
        }
      } else {
        if (currentScroll > header) {
          setNavbarTop(`-${header}px`);
        }
      }
      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);

  return (
    <header className={styles["header"]} style={{ top: navbarTop }}>
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
            title="Hamburger"
            className={styles["header__midbar-left--hamburger"]}
            onClick={() => setShowMenu(true)}
          >
            Hamburger
          </a>
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

      <div className={styles["header__searchbar"]}>
        <button className={styles["header__searchbar--btn"]}>Search</button>
        <input
          type="text"
          className={styles["header__searchbar--input"]}
          placeholder="Search..."
        />
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

      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Header;
