import React from "react";
import Ourteamimg from "../../../public/Images/Ourteamimg.png";

const Ourteam = () => {
  return (
    <section
      className="flex flex-col  lg:mx-10 md:my-20 items-center lg:items-start md:flex-row justify-between px-5 lg:px-16 pt-12 bg-white"
    >
      <div className="md:w-[50%] w-full">
        <img className=" rounded-lg " src={Ourteamimg} alt="Our Team" />
      </div>

      <div className="mt-10 md:w-[40%] w-full lg:mt-6  text-center lg:text-left">
        <h2 className="lg:text-6xl md:text-5xl text-4xl font-medium tracking-wider text-gray-900">Meet Our Team</h2>
        <p className="text-gray-600 md:mt-10 mt-3 lg:text-lg md:text-sm text-xs">
          Discover the brilliance behind Embrace. Our team blends
        </p>
        <p className="text-gray-600 md:mt-2 lg:text-lg md:text-sm text-xs">
          {" "}
          innovation and artistry to craft digital wonders that captivate.
        </p>
        <button className="lg:mt-20 md:mt-10 sm:mt-10 mt-4 lg:px-10 lg:py-3 lg:text-2xl text-sm py-2 px-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Ourteam;
