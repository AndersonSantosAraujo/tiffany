import Header from "../../components/Header";
import Shelf from "../../components/Shelf";
import products from "../../data/products.json";

const Home = () => {
  return (
    <>
      <Header />
      <Shelf products={products} />
    </>
  );
};

export default Home;
