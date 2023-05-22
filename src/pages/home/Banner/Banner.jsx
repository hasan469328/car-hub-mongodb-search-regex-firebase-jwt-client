import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />

        {/* Text ON Image */}
        <div className="absolute flex h-full w-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
          <div className="text-white w-1/2 space-y-7 pl-[100px]">
            <h2 className=" text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary mr-5 bg-[#ff3811] border-0">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-outline btn-circle bg-[#ffffffd9] border-0"
          >
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-0">
            ❯
          </a>
        </div>
      </div>
      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-[600px] ">
        <img src={img2} className="w-full rounded-xl" />
        {/* Banner Text */}
        <div className="absolute left-0 top-0 h-full w-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white rounded-xl">
          <div className="w-1/2 text-white pl-[100px] space-y-7">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/* Banner Button */}
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle bg-[#ffffffd9] border-0">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-0">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        {/* Banner Text */}
        <div className="absolute left-0 top-0 h-full w-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
          <div className="w-1/2 text-white pl-[100px] space-y-7">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/* Banner Button */}
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle bg-[#ffffffd9] border-0">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-0">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        {/* Banner Text */}
        <div className="absolute left-0 top-0 h-full w-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
          <div className="w-1/2 text-white pl-[100px] space-y-7">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/* Banner Button */}
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle bg-[#ffffffd9] border-0">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-0">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
