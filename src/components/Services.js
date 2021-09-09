import React from "react";
import PropTypes from "prop-types";

const Services = ({ data }) => {
  return (
    <div id="service" className="bg-secondary  ">
      <br />
      <br />
      <br />
      <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center text-4xl font-bold tracking-wider">
        <h1 className=" text-subtitle">OUR SERVICES </h1>
      </div>
      <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center  mt-2">
        <span className="section-title ml-5"> </span>
      </div>
      <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center text-sm font-bold tracking-wider">
        <h1 className="mt-3 ">
          {" "}
          Whether you need to enhance your existing website, build a new online
          store, or integrate payment gateways, we got all your needs covered.{" "}
        </h1>
      </div>

      <div class="md:flex md:justify-center md:space-x-8 md:px-5 mt-1">
        <div class="grid grid-flow-row  grid-rows-9 gap-12 mx-auto  mt-10 md:grid-cols-3 md:grid-rows-3 mx-auto">
          {data &&
            data.map((e) => (
              <div class=" px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                  <img
                    class="w-64"
                    src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg"
                    alt=""
                  />
                  <div class="mt-4 text-green-600 text-center">
                    <h1 class="text-xl font-bold">{e.name}</h1>
                    <p class="mt-4 text-gray-600">{e.text}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {};

export default Services;
