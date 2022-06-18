import React from "react";
import { images } from "../../constants";
import "./Section2.scss";

const Section2 = () => {
  return (
    <div className="app__section2">
      <div className="app__section2-firstRow ">
        <div className="app__section2-firstRow-price">
          <h1>
            $9,449,627.26 <span>Dividends</span>
          </h1>
          <small>Paid out to Hatom Token holders over 3 years</small>
        </div>
        <button className="app__section2-firstRow-buyToken">Buy Hotam Tokens</button>
      </div>
      <div className="app__section2-heading">
        <span>Features</span> of Hatom Protocol
      </div>
      <div className="app__section2-features">
        <div className="app__features">
          <div className="feature">
            <h3>Earn</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              <br />
              tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.{" "}
            </p>
          </div>
          <div className="feature">
            <h3>Borrow</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="app__section2-coin">
          <div className="feature__coinlines">
            <hr className="shape1" />
          </div>
          <img src={images.lightcoin} alt="coin" />
        </div>
        <div className="app__features">
          <div className="feature">
            <h3>Dividends</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor, dignissim sit amet.
            </p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort, dignissim sit
                ametent.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort, dignissim sit
                ametent.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
