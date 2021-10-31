import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../context/useAuth";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  const { singleService } = props;
  const { user } = useAuth();

  return (
    <div className="">
      <div className="col">
        <div className="card service-card">
          <img
            src={singleService.cardImg}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{singleService.name}</h4>
            <p className="card-text">{singleService.shortDescription}</p>
            <h5 className="text-danger fw-bold">
              Price: BDT {singleService.price}/person
            </h5>
            <div className="card-footer d-flex  justify-content-between mt-3">
              {user.email ? (
                <NavLink to={`/service/${singleService._id}`}>
                  <button className="btn btn-warning">Purchase Item</button>
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <button className="btn btn-danger">
                    Sign in to Purchase
                  </button>
                </NavLink>
              )}

              {user.email && (
                <NavLink to={`/updateservice/${singleService._id}`}>
                  <button className="btn btn-info shadow-lg">
                    Update Item
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
