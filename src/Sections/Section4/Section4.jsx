import React from "react";
import "./Section4.scss";
import { animations } from "../../constants";
import Lottie from "react-lottie";
import { Partners } from "../../component";
const Section4 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animations.electronics,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="app__section4">
      <div className="app__section4-content">
        <h3>Partners</h3>
      </div>
      <Partners />
      <div className="app__section4-animations">
        <div className="content">
          <span className="span1"></span>
          <div className="content-details">
            <p>
              “holoride is leading a new innovation front that has the potential to be
              transformational for the automotive industry and bring Elrond technology into the
              hyperconnected cars of the future.”
            </p>
            <h3>Beniamin Mincu, CEO & co-founder Elrond</h3>
          </div>
          <span className="span2"></span>
        </div>
        <div className="animation">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default Section4;
