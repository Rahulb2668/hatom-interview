import React from "react";
import Lottie from "react-lottie";
import { animations } from "../../constants";
import "./Section6.scss";

const Section6 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animations.loop,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="app__section6 app__flex">
      <div className="app__section6-disclaimer">
        <h1>Disclaimer</h1>
        <button className="app__buttonClass">Legal Information</button>
      </div>
      <div className="app__section6-animation">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Section6;
