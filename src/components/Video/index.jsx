import PropTypes from "prop-types";
import styles from "./Video.module.scss";
import Button from "../Button";

const Video = ({ videoSrc }) => {
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
        src={videoSrc}
      ></video>
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
  videoSrc: PropTypes.string.isRequired,
};

export default Video;
