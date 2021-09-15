import React from "react";
import PropTypes from "prop-types";

const Testimonial = ({ data }) => {
  return (
    <div id="testimonial" className="bg-secondary mb-10">
      <br />
      <br />
      <br />
      <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center text-4xl font-bold tracking-wider">
        <h1 className=" text-subtitle">WHAT OUR CLIENTS SAY </h1>
      </div>
      <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center  mt-2">
        <span className="section-title ml-5"> </span>
      </div>

      <div className="md:flex md:justify-center md:space-x-8 md:px-5 mt-1">
        <div className="grid grid-flow-row md:grid-cols-3  grid-rows-1 gap-12 mx-auto  mt-10 md:grid-rows-1 mx-auto">
          {data &&
            data.map((e,i) => (
              <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg" key={i}>
                <div className="flex mb-4">
                
                </div>
                <p className="text-gray-800 dark:text-gray-100 leading-snug italic md:leading-normal">
                 {e.text}
                </p>
                <div className="flex justify-between items-center mt-5">
                  
                  <div className="ml-1 text-gray-500  font-semibold">
                   {e.name}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
    data:PropTypes.array,
};

export default Testimonial
