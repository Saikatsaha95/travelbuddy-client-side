import React from "react";
import img1 from "../../images/Biman_Bangladesh.jpg";
import img2 from "../../images/plan-img.png";
import img3 from "../../images/plan-img2.png";
import "./FlightOffers.css";

const FlightOffers = () => {
  return (
    <div class="row row-cols-1 row-cols-md-4 g-4 mt-5 justify-content-center flight-cards">
      <div class="card mb-3 card-width me-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={img1} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Fly with Biman Bangladesh Airlines</h5>
              <p class="card-text">All over Bangladesh at the best rate</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3 card-width me-3 place-items-center">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={img2} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Save up to 15%</h5>
              <p class="card-text">On Turkish Airline</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3 card-width">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={img3} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Save up to 7%</h5>
              <p class="card-text">On Biman Bangladesh flights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightOffers;
