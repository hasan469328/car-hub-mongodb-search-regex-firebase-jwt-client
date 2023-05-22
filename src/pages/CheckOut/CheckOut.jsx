import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
<link rel="stylesheet" href="@sweetalert2/theme-borderless/borderless.css"></link>

const CheckOut = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext);
  const { title, _id, price, service_id, img } = service;
  const navigate = useNavigate()

  const handleOrder = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const order = {
      customerName: name,
      customerEmail: email,
      deliveryDate: date,
      bill: `$${Math.round(price)}`,
      product_id: _id,
      img,
      service: title
    }
    console.log(order)
    fetch('http://localhost:5000/bookings', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          icon: 'success',
          title: 'Success!!!',
          text: 'Your order successfully placed!',
        })
        navigate("/")
      }
      console.log(data)
    })
  }
  return (
    <div>
      <h1>CheckOut: {title}</h1>
      <form onSubmit={handleOrder} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              name="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={price}
              placeholder="due amount"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Confirm Order"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
