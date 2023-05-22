import React from "react";
import { Link } from "react-router-dom";

const CardServices = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 w-[314px] h-[208px]">
        <img src={img} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="text-[#444444] text-2xl font-bold">{title}</h2>
        <p className="text-[#FF3811] text-xl font-semibold">Price: ${price}</p>
        <Link to={`/checkout/${_id}`} className="">
          <button className="btn btn-warning bg-[#FF3811] border-0">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CardServices;
