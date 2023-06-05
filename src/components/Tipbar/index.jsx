import { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./Tipbar.module.scss";

const Tipbar = () => {
  const [sliderActive, setSliderActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setSliderActive(window.innerWidth <= 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    infinite: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    className: "tipbar-slick",
    responsive: [
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {sliderActive ? (
        <Slider {...sliderSettings}>
          <div className={styles["tipbar__item"]}>
            <img
              src="https://media.tiffany.com/is/image/tiffanydm/HP_SERVICE_BLUEBOX_DESKTOP?$tile$&wid=988&hei=988&fmt=webp"
              alt="Complimentary Shipping & Returns"
            />
            <h3>Complimentary Shipping & Returns</h3>
            <p>
              We offer complimentary shipping and returns on all Tiffany orders.
            </p>
            <a href="#">
              <span>Learn More</span>
            </a>
          </div>

          <div className={styles["tipbar__item"]}>
            <img
              src="https://media.tiffany.com/is/image/tiffanydm/HP_SERVICE_CUSTOMERCARE_DESKTOP?$tile$&wid=988&hei=988&fmt=webp"
              alt="Tiffany At Your Service"
            />
            <h3>Tiffany At Your Service</h3>
            <p>Our client care experts are always here to help. </p>
            <a href="#">
              <span>Contact Us</span>
            </a>
          </div>

          <div className={styles["tipbar__item"]}>
            <img
              src="https://media.tiffany.com/is/image/tiffanydm/HP_SERVICE_APPT_DESKTOP?$tile$&wid=988&hei=988&fmt=webp"
              alt="Book an Appointment"
            />
            <h3>Book an Appointment</h3>
            <p>We’re happy to help with in-store or virtual appointments.</p>
            <a href="#">
              <span>Book Now</span>
            </a>
          </div>

          <div className={styles["tipbar__item"]}>
            <img
              src="https://media.tiffany.com/is/image/tiffanydm/HP_SERVICE_BLUEBOX_DESKTOP?$tile$&wid=988&hei=988&fmt=webp"
              alt="The Iconic Blue Box"
            />
            <h3>The Iconic Blue Box</h3>
            <p>
              Your Tiffany purchase comes wrapped in our Blue Box packaging.
            </p>
            <a href="#">
              <span>Explore All Gifts</span>
            </a>
          </div>
        </Slider>
      ) : (
        <div className={styles["tipbar"]}>
          <div className={styles["tipbar__item"]}>
            <img
              src="https://media.tiffany.com/is/image/tiffanydm/HP_SERVICE_BLUEBOX_DESKTOP?$tile$&wid=988&hei=988&fmt=webp"
              alt="Complimentary Shipping & Returns"
            />
            <h3>Complimentary Shipping & Returns</h3>
            <p>
              We offer complimentary shipping and returns on all Tiffany orders.
            </p>
            <a href="#">
              <span>Learn More</span>
            </a>
          </div>

          <div className={styles["tipbar__item"]}>
            <img
              src="https://media.tiffany.com/is/image/tiffanydm/HP_SERVICE_CUSTOMERCARE_DESKTOP?$tile$&wid=988&hei=988&fmt=webp"
              alt="Tiffany At Your Service"
            />
            <h3>Tiffany At Your Service</h3>
            <p>Our client care experts are always here to help. </p>
            <a href="#">
              <span>Contact Us</span>
            </a>
          </div>

          <div className={styles["tipbar__item"]}>
            <img
              src="https://media.tiffany.com/is/image/tiffanydm/HP_SERVICE_APPT_DESKTOP?$tile$&wid=988&hei=988&fmt=webp"
              alt="Book an Appointment"
            />
            <h3>Book an Appointment</h3>
            <p>We’re happy to help with in-store or virtual appointments.</p>
            <a href="#">
              <span>Book Now</span>
            </a>
          </div>

          <div className={styles["tipbar__item"]}>
            <img
              src="https://media.tiffany.com/is/image/tiffanydm/HP_SERVICE_BLUEBOX_DESKTOP?$tile$&wid=988&hei=988&fmt=webp"
              alt="The Iconic Blue Box"
            />
            <h3>The Iconic Blue Box</h3>
            <p>
              Your Tiffany purchase comes wrapped in our Blue Box packaging.
            </p>
            <a href="#">
              <span>Explore All Gifts</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Tipbar;
