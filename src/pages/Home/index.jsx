import Button from "../../components/Button";
import Header from "../../components/Header";
import Shelf from "../../components/Shelf";
import Video from "../../components/Video";
import products from "../../data/products.json";
import DoubleCard from "../../components/DoubleCard";
import styles from "./Home.module.scss";
import GridImages from "../../components/GridImages";

const Home = () => {
  return (
    <>
      <Header />
      <section className={styles["container"]}>
        <div className={styles["video-top"]}>
          <Video
            videoSrcDesktop="https://media.tiffany.com/is/content/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Mobile"
            videoSrcMobile="https://media.tiffany.com/is/content/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Desktop-1"
            breakpoint={900}
          />
          <div className={styles["video-top__content"]}>
            <h3>This Is Tiffany HardWear</h3>
            <p>
              Our brand ambassadors redefine Tiffany HardWear in our latest
              campaign.
            </p>
            <Button
              link="#"
              name="Shop the Collection"
              marginTop={24}
              marginBottom={8}
            />
          </div>
        </div>
        <Shelf products={products} />
        <Button link="#" name="Shop Now" marginTop={10} marginBottom={60} />
        <DoubleCard />
        <GridImages />
        <div className={styles["video-bottom"]}>
          <Video
            videoSrcDesktop="https://media.tiffany.com/is/content/tiffanydm/TiffanyLandmark_6sCutdownFloral_1920x1080"
            videoSrcMobile="https://media.tiffany.com/is/content/tiffanydm/TiffanyLandmark_6sCutdownFloral_1080x1080"
            breakpoint={900}
          />
          <div className={styles["video-bottom__content"]}>
            <h3>Now Open: The Landmark</h3>
            <p>
              A legacy of brilliance continues with The Landmark. Discover a new
              Tiffany & Co. for a new era at 727 Fifth Avenue, New York.
            </p>
            <a href="#">
              <span>Learn More</span>
            </a>
          </div>
        </div>
        <div className={styles["banner-love"]}>
          <a href="#">
            <picture>
              <source
                type="image/webp"
                media="(max-width: 900px)"
                srcSet="https://media.tiffany.com/is/image/tiffanydm/2023_GW-HP-FWMH-Mobile?$tile$&wid=720&fmt=webp"
              />
              <img
                src="https://media.tiffany.com/is/image/tiffanydm/2023_GW-HP-FWMH-Desktop?$tile$&wid=2992&fmt=webp"
                alt="Love Your Way"
              />
            </picture>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
