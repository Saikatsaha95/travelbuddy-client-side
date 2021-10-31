import React from "react";
import img from "../../images/travel-img.png";
import "./TravelWithUs.css";

const TravelWithUs = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-5 ">
      <div>
        <img className="img-fluid travel-img" src={img} alt="" />
      </div>
      <div className="ms-2 text-white">
        <h1 className="fw-bold">Our Facilities</h1>
        <ul className="banner-text">
          <li>- We will book your hotels</li>
          <li>- We will book you a travel car.</li>
          <li>- We will buy your filght tickets</li>
          <li>- You will be safe with us</li>
        </ul>
      </div>
    </div>
  );
};

export default TravelWithUs;
