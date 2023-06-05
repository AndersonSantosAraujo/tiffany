import styles from "./DesktopMenu.module.scss";
import menuDesktop from "../../data/menuDesktop.json";
import { useState, useEffect } from "react";
import SubmenuDesktop from "./SubmenuDesktop";

const DesktopMenu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const arrData = Object.keys(menuDesktop).map((section) => {
      const categories = menuDesktop[section].categories;
      const arrCategories = Object.keys(categories).map((category) => {
        const subcategories = categories[category];
        return {
          category,
          subcategories,
        };
      });
      return {
        section,
        categories: arrCategories,
      };
    });

    setData(arrData);
  }, []);

  return (
    <nav className={styles["desktop-menu"]}>
      <ul>
        {data.map((data) => (
          <SubmenuDesktop key={data.section} data={data} />
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
