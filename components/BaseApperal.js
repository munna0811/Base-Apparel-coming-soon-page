import React from "react";
import imageD from "../images/hero-desktop.jpg";
import imageM from "../images/hero-mobile.jpg";
import logo from "../images/logo.svg";
import button from "../images/icon-arrow.svg";

const BaseApperal = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="about">
          <h1 className="heading">
            <span style={{ color: "hsl(0, 36%, 70%)", fontWeight: "200" }}>
              WE'RE
            </span>{" "}
            COMING SOON
          </h1>
          <p className="paragraph">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up to date with announcements
            and our launch deals.
          </p>
          <input type="type" className="input" value="Email Address" />
          <button className="button">
            <img src={button} alt="button" />
          </button>
        </div>
        <picture className="poster">
          <source srcSet={imageM} media="(max-width: 400px)" />
          <source srcSet={imageD} media="(min-width: 1440px)" />
          <img src={imageD} alt="poster-images" style={{ width: "20rem" }} />
        </picture>
      </div>
    </div>
  );
};

export default BaseApperal;
