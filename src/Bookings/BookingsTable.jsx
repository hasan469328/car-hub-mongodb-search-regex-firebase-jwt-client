import React from "react";

const BookingsTable = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, bill, deliveryDate, img, service, customerEmail } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={img} />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{deliveryDate}</td>
      <td>{bill}</td>
      <th>
        {booking?.status === "confirm" ? (
          <span className="text-purple-500 text-bold">Confirm</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            please confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingsTable;
