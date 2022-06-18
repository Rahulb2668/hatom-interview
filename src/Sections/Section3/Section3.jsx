import React, { useState, useEffect } from "react";
import "./Section3.scss";
import { animations } from "../../constants";
import { BsArrowRightShort } from "react-icons/bs";
import Lottie from "react-lottie";
const Section3 = () => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    let tempArray = [];
    [animations.section3_1, animations.section3_2, animations.section3_3].map((item) =>
      tempArray.push({
        loop: true,
        autoplay: true,
        animationData: item,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      })
    );
    setOptions(tempArray);
  }, []);
  //   const defaultOptio = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: animations.section3_1,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };

  return (
    <div className="app__section3">
      <h1 className="app__section3-heading">Understanding Hatom</h1>
      <div className="app__section3-cards">
        {options && options.length > 1 && (
          <>
            <div className="app__section3-card">
              <Lottie options={options[0]} />
              <h3>Get Hatom</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/">
                Learn More <BsArrowRightShort />
              </a>
            </div>
            <div className="app__section3-card">
              <Lottie options={options[1]} />
              <h3>Benefits of Hatom Token</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/">
                Learn More <BsArrowRightShort />
              </a>
            </div>
            <div className="app__section3-card">
              <div className="app__section3-cardAnimation">
                <Lottie options={options[2]} />
              </div>
              <h3>White Paper</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/">
                Learn More <BsArrowRightShort />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Section3;
