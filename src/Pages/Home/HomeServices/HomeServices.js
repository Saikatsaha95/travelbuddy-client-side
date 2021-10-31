import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const HomeServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://haunted-alien-08646.herokuapp.com/services")
      .then((result) => setAllServices(result.data));
  }, []);
  return (
    <div>
      <h2>This is home services</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {allServices.map((singleService) => (
          <ServiceCard
            key={singleService._id}
            singleService={singleService}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
