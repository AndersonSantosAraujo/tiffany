import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Shelf from "../../components/Shelf";
import Video from "../../components/Video";
import products from "../../data/products.json";
import DoubleCard from "../../components/DoubleCard";
import styles from "./Home.module.scss";
import GridImages from "../../components/GridImages";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Tipbar from "../../components/Tipbar";

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

        <div className={styles["card-stories"]}>
          <h2>Stories</h2>
          <div className={styles["card-stories__content"]}>
            <Card
              img="https://media.tiffany.com/is/image/tiffanydm/BeyonceTour-HP-Stories?$tile$&wid=736&hei=920&fmt=webp"
              title="Beyoncé Tours in Tiffany & Co."
              text="The House is the official jeweler for the RENAISSANCE WORLD TOUR."
              cta="Learn More"
            />
            <Card
              img="https://media.tiffany.com/is/image/tiffanydm/LOCK-HP-WhatIsNew-Desktop-1?$tile$&wid=736&hei=920&fmt=webp"
              title="Tiffany Lock"
              text="No rules. All welcome."
              cta="Explore the Collection"
            />
            <Card
              img="https://media.tiffany.com/is/image/tiffanydm/T-HP-WhatIsNew-Desktop-JIMIN?$tile$&wid=736&hei=920&fmt=webp"
              title="This Is Tiffany T"
              text="Our favorite letter, everyone’s favorite collection. "
              cta="Learn More "
            />
          </div>
        </div>

        <Banner
          srcDesktop="https://media.tiffany.com/is/image/tiffanydm/2023_GW-HP-FWMH-Desktop?$tile$&wid=2992&fmt=webp"
          srcMobile="https://media.tiffany.com/is/image/tiffanydm/2023_GW-HP-FWMH-Mobile?$tile$&wid=720&fmt=webp"
          title="Love Your Way"
          text="You’ll know who it’s for. You’ll know when it’s time. You’ll just know."
          cta="Explore Love & Engagement"
          textAlign="right"
        />

        <Banner
          srcDesktop="https://media.tiffany.com/is/image/tiffanydm/2021_Bloomgberg-HP_FWMH-Desktop2?$tile$&wid=2992&fmt=webp"
          srcMobile="https://media.tiffany.com/is/image/tiffanydm/2021_Bloomgberg-HP_FWMH-Mobile?$tile$&wid=720&fmt=webp"
          title="From the Source"
          text="Handcrafting the world’s best diamonds starts with knowing where they come from. We proudly trace 100% of our rough diamonds to known mines and sources."
          cta="Follow Your Diamond’s Journey"
          textAlign="left"
        />

        <div className={styles["tipbar"]}>
          <h2>The Tiffany Experience</h2>
          <Tipbar />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
