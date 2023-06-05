import styles from "./Footer.module.scss";

const index = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__header"]}>
        <p>Home</p>
      </div>
    </footer>
  );
};

export default index;
