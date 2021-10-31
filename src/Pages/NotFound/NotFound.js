import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";
import img from "../../images/404-error.jpg";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center notfound-img">
      <div>
        <img src={img} alt="" />

        <div className="text-center mt-3">
          <NavLink to="/">
            <button className="btn btn-success">Back to Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
