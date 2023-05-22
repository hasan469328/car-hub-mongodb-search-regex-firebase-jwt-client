import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen mt-10 mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <div className="w-[460px] h-[473px]">
            <img
              src={person}
              className="shadow-2xl rounded-lg "
            />
          </div>

          <div className="w-[327px] h-[332px] absolute top-1/3 left-1/3 border-8 border-white rounded-lg">
            <img src={parts} alt="" />
          </div>
        </div>
        <div className="lg:w-1/2 space-y-7">
          <p className="text-[#FF3811] text-2xl font-semibold">About Us</p>
          <h1 className="text-5xl font-bold text-[#151515]">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary bg-[#FF3811] border-0">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
