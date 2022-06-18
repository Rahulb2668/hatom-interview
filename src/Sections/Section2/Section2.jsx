import React from "react";
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
    </div>
  );
};

export default Section2;
