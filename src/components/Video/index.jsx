import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./Video.module.scss";
import Button from "../Button";

const Video = ({ videoSrcDesktop, videoSrcMobile, breakpoint }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= breakpoint);
  const aspectRatio = isDesktop ? "16 / 9" : "1 / 1";

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return (
    <div className={styles["video"]}>
      <video
        width={"100%"}
        height={"100%"}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        preload="auto"
        src={isDesktop ? videoSrcDesktop : videoSrcMobile}
        style={{ aspectRatio }}
      />
      <div className={styles["video__content"]}>
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
  );
};

Video.propTypes = {
  videoSrcDesktop: PropTypes.string.isRequired,
  videoSrcMobile: PropTypes.string.isRequired,
  breakpoint: PropTypes.number.isRequired,
};

export default Video;
