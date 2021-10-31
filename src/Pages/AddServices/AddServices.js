import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddServices.css";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://haunted-alien-08646.herokuapp.com/addservices", data)
      .then((result) => {
        if (result.data.insertedId) {
          alert("Service added");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h2 className="text-white">Please Add a new service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Service name" />
        <input
          type="number"
          {...register("price", { required: true })}
          placeholder="Service price"
        />
        <input
          {...register("shortDescription", { required: true })}
          placeholder="Add short description"
        />
        <input
          {...register("detailDescription", { required: true })}
          placeholder="Add detail description"
        />
        <input
          {...register("cardImg", { required: true })}
          placeholder="Card image url"
        />
        <input
          {...register("bannerImg", { required: true })}
          placeholder="Banner image Url"
        />
        <input className="btn btn-danger w-25 mx-auto" type="submit" />
      </form>
    </div>
  );
};

export default AddServices;
