import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../context/useAuth";
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState();
  const { user } = useAuth();
  let count = 0;
  useEffect(() => {
    axios
      .get("https://haunted-alien-08646.herokuapp.com/orders")
      .then((res) => setAllOrders(res.data));
  }, []);

  console.log(allOrders);

  const handleStatus = (data) => {
    data.status = "Approved";
    const url = `https://haunted-alien-08646.herokuapp.com/orders/${data._id}`;
    axios.put(url, data).then((res) => console.log(res.data));
    window.location.reload();
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://haunted-alien-08646.herokuapp.com//orders/${id}`;
      axios.delete(url).then((res) => {
        if (res.data.deletedCount > 0) {
          alert("Service Deleted");
          const restData = allOrders.filter((order) => order._id !== id);
          setAllOrders(restData);
        }
      });
    }
  };

  return (
    <div className="container manageorder-area">
      <div className="table-responsive">
        <table className="table text-center table-success">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Service Name</th>
              <th scope="col">Ordered By</th>
              <th scope="col">Email</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders?.map((order) => (
              <tr key={order._id}>
                <th scope="row">{(count += 1)}</th>
                <td>{order.name}</td>
                <td>{user.displayName}</td>
                <td>{user.email} </td>
                <td>{order.price}</td>
                <td>
                  {" "}
                  {order.status === "pending" ? (
                    <button
                      onClick={() => handleStatus(order)}
                      className="btn btn-danger"
                    >
                      {" "}
                      {order.status}
                    </button>
                  ) : (
                    <button className="btn btn-success"> {order.status}</button>
                  )}{" "}
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-warning"
                  >
                    {" "}
                    Delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
