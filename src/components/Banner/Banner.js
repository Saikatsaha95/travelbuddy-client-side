import React from "react";
import img from "../../images/hero-right.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="d-flex justify-item-center align-items-center m-3 banner-area">
      <div className="me-2 text-white">
        <h1 className="banner-title">Hotel, car & experiences</h1>
        <p className="banner-text">
          Accompanying us, you have a trip full of experiences. With Chisfis,
          booking accommodation, resort villas, hotels
        </p>
        <button className="btn btn-banner px-5">Start your search</button>
      </div>
      <div>
        <img
          className="img-fluid container-fluid banner-img"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
