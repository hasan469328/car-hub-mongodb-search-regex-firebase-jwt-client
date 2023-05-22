import React, { useEffect, useRef, useState } from "react";
import CardServices from "./CardServices";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState('');
  const searchRef = useRef()
  const handleSearch = () => {
    setSearch(searchRef.current.value)
  }
  useEffect(() => {
    fetch(`http://localhost:5000/services?sort=${asc ? "asc" : "dsc"}&search=${search}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc, search]);
  return (
    <div className="mb-10 ">
      <div className="text-center">
        <h1 className="text-[#FF3811] text-xl font-semibold">Services</h1>
        <h2 className="text-[#151515] text-5xl font-bold">Our Service Area</h2>
        <br />
        <p className="text-[#737373;]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
        <button onClick={() => setAsc(!asc)} className="btn btn-primary">
          {asc ? "price: low to high" : "price: high to low"}
        </button>
        <div className="form-control mb-10">
          <div className="input-group">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services?.map((service) => (
          <CardServices key={service._id} service={service}></CardServices>
        ))}
      </div>
    </div>
  );
};

export default Services;
