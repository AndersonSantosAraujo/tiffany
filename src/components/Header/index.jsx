import styles from "./Header.module.scss";
// import menuDesktop from "../../data/menuDesktop.json";

const Header = () => {
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
          <a href="#">Choose location</a>
        </div>

        <button className={styles["header__topbar--close"]}>Close</button>
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
              height={26}
              width={191}
            />
          </a>
        </div>

        <div className={styles["header__midbar-right"]}>
          <a
            href="#"
            title="Book an Appointment"
            className={styles["header__midbar-left--book-appointment"]}
          >
            Book an Appointment
          </a>
          <a
            href="#"
            title="SignIn"
            className={styles["header__midbar-left--signin"]}
          >
            SignIn
          </a>
          <a
            href="#"
            title="Favorites"
            className={styles["header__midbar-left--favorites"]}
          >
            Favorites
          </a>
          <a
            href="#"
            title="Shopping Bag"
            className={styles["header__midbar-left--shopping-bag"]}
          >
            Shopping Bag
          </a>
        </div>
      </div>

      <nav className={styles["header__navbar"]}>
        <ul>
          <li>Jewelry</li>
          <li>Gifts</li>
          <li>Love & Engagement</li>
          <li>Fine Watches</li>
          <li>Home & Accessories</li>
          <li>Fragrance</li>
          <li>Men’s</li>
          <li>Stories</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
