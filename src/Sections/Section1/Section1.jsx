import React from "react";
import "./Section1.scss";
import Lottie from "react-lottie";
// eslint-disable-next-line
import { animations, images } from "../../constants";
const Section1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animations.magic,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="app__section1">
      <div className="app__section1-heading">
        <h1>Hatom Token</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      {/* <img src={images.bubbles} alt="" className="app__section1-mobileBubbles" /> */}
      <div className="app__section1-lottie">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Section1;
