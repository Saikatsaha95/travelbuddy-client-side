import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../context/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="placeorder-form ">
      <h2 className="text-center title-text">Please place your order</h2>

      <div className="w-25  mx-auto ">
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue={user.displayName} {...register("name")} />
          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <input {...register("city", { required: true })} placeholder="City" />
          <input
            {...register("address", { required: true })}
            placeholder="Full Address"
          />
          <input className="btn btn-danger w-50 mx-auto" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
