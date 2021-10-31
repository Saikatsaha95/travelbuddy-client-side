import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../context/useAuth";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const [details, setDetails] = useState({});
  const { user } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    const url = `https://haunted-alien-08646.herokuapp.com/services/${id}`;
    axios.get(url).then((res) => setDetails(res.data));
  }, []);

  const handleAddToCart = (service) => {
    const data = service;
    delete data._id;
    data.status = "pending";
    data.user = user.email;
    axios
      .post("https://haunted-alien-08646.herokuapp.com/orders", data)
      .then((res) => {
        console.log(res.data);
      })
      .finally(() => history.push("/myorders"));
  };

  return (
    <div className="container">
      <div className="mx-auto">
        <div className="text-center text-white">
          <img src={details.bannerImg} className="img-fluid" alt="Responsive" />
          <h2 className="mt-5 fw-bold">{details.name}</h2>
        </div>

        <p className="text-white mt-3">{details.detailDescription}</p>

        <h4 className="text-center text-white border w-25 mx-auto p-3 bg-info">
          BDT {details.price}/person
        </h4>

        <div className="placeorder-form ">
          <h4>User Information</h4>
          <div className="w-50 mx-auto">
            <form
              className="d-flex flex-column"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input defaultValue={user.displayName} {...register("name")} />
              <input
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}

              <input
                {...register("city", { required: true })}
                placeholder="City"
              />
              <input
                {...register("address", { required: true })}
                placeholder="Full Address"
              />

              <input
                type="number"
                {...register("phone", { required: true })}
                placeholder="Your phone number"
              />
              <input
                onClick={() => handleAddToCart(details)}
                className="btn btn-danger w-50 mx-auto"
                type="submit"
                value="Add to cart"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
