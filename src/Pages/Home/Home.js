import React from "react";
import Banner from "../../components/Banner/Banner";
import FlightOffers from "../../components/FlightOffers/FlightOffers";
import TravelWithUs from "../../components/TravelWithUs/TravelWithUs";
import HomeServices from "./HomeServices/HomeServices";

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <FlightOffers />
      <HomeServices></HomeServices>
      <TravelWithUs></TravelWithUs>
    </div>
  );
};

export default Home;
<h2>This is home</h2>;
