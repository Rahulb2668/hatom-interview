import React from "react";
import "./Section5.scss";
const Section5 = () => {
  return (
    <div className="app__section5 app__flex">
      <h1>Subscribe to Hotam Newsletter</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.adipiscing elita dipiscing elit</p>
      <div className="app__section5-inputContianer">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </div>
      <button>Subscribe</button>
    </div>
  );
};

export default Section5;
