import Header from "../../components/Header";
import Shelf from "../../components/Shelf";
import Video from "../../components/Video";
import products from "../../data/products.json";

const Home = () => {
  return (
    <>
      <Header />
      <Video videoSrc="https://media.tiffany.com/is/content/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Mobile" />
      <Shelf products={products} />
    </>
  );
};

export default Home;
