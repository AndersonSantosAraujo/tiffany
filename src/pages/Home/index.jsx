import Button from "../../components/Button";
import Header from "../../components/Header";
import Shelf from "../../components/Shelf";
import Video from "../../components/Video";
import products from "../../data/products.json";
import DoubleCard from "./DoubleCard";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <section className={styles["container"]}>
        <Video videoSrc="https://media.tiffany.com/is/content/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Mobile" />
        <Shelf products={products} />
        <Button link="#" name="Shop Now" marginTop={10} marginBottom={60} />
        <DoubleCard />
      </section>
    </>
  );
};

export default Home;
