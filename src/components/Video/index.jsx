import PropTypes from "prop-types";
import { useEffect, useState } from "react";

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
  );
};

Video.propTypes = {
  videoSrcDesktop: PropTypes.string.isRequired,
  videoSrcMobile: PropTypes.string.isRequired,
  breakpoint: PropTypes.number.isRequired,
};

export default Video;
