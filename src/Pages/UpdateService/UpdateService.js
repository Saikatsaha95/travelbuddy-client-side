import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const UpdateService = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  console.log(id);
  const onSubmit = (data) => {
    console.log(data);
    axios
      .put(`https://haunted-alien-08646.herokuapp.com/service/${id}`, data)
      .then((result) => {
        if (result.data.insertedId) {
          alert("Service Updated");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h2 className="text-white">Update this service</h2>
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

export default UpdateService;
