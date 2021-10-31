import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../context/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  let count = 0;

  useEffect(() => {
    axios
      .get("https://haunted-alien-08646.herokuapp.com/orders")
      .then((res) => setOrders(res.data));
  }, []);

  console.log(orders);

  const userOrders = orders?.filter(
    (signleOrder) => signleOrder.user === user.email
  );

  console.log("userOrders", userOrders);

  const productPrice = userOrders?.map((od) => parseInt(od.price));
  console.log("Product price", productPrice);

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  const totalPrice = productPrice.reduce(reducer, 0);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://haunted-alien-08646.herokuapp.com/orders/${id}`;
      axios.delete(url).then((res) => {
        if (res.data.deletedCount > 0) {
          alert("Service Deleted");
          const restData = orders.filter((order) => order._id !== id);
          setOrders(restData);
        }
      });
    }
  };

  return (
    <div className="container myorder-area">
      <h2 className="text-center text-white">Your orders</h2>
      <div className="table-responsive">
        <table className="table text-center table-success">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Service Name</th>
              <th scope="col">Ordered By</th>
              <th scope="col">Status</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {userOrders.map((order) => (
              <tr key={order._id}>
                <th scope="row">{(count += 1)}</th>
                <td>{order.name}</td>
                <td>{user.displayName}</td>

                <td>
                  {order.status === "pending" ? (
                    <span className="text-info">{order.status}</span>
                  ) : (
                    <span className="text-success">{order.status}</span>
                  )}
                </td>
                <td>{order.price}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-danger"
                  >
                    {" "}
                    Delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
          {totalPrice ? (
            <tfoot>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th className="text-white">Total: {totalPrice}</th>
            </tfoot>
          ) : (
            <span className="text-center text-white">No Product Available</span>
          )}
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
