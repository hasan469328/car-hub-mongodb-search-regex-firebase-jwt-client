import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BookingsTable from "./BookingsTable";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { HashLoader } from "react-spinners";

const Bookings = () => {
  const { user, loader, setLoader } = useContext(AuthContext);
  console.log(user?.email);
  const navigate = useNavigate()

  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: 'get',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
          setBookings(data)
        }
        else(navigate('/login'))
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
            console.log(data);
          });
      }
    });
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data)
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = 'confirm'
          const newBookings = [updated, ...remaining]
          setBookings(newBookings)
          console.log(updated, data);
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-10">My Bookings</h1>

      {/* tabular data */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Delivery Date</th>
              <th>Bill</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <BookingsTable
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingsTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // <div>
    //   {loader ? (
    //     <HashLoader
    //       color="#FF3811"
    //       className="min-h-screen min-w-full"
    //       cssOverride={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //       speedMultiplier={1}
    //     />
    //   ) : (
    //     <>
    //       <p>Total Bookings: {bookings.length}</p>
    //     </>
    //   )}
    // </div>
  );
};

export default Bookings;
