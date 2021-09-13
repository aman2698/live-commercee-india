import React from "react";
import PropTypes from "prop-types";

const Portfolio = ({data}) => {
  return (
    <div id="service" className="bg-secondary">
      <br />
      <br />
      <br />
      <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center text-4xl font-bold tracking-wider">
        <h1 className=" text-subtitle">OUR PORTFOLIO </h1>
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
        <div class="grid grid-flow-row  grid-rows-6 gap-12 mx-auto  mt-10 md:grid-cols-3 md:grid-rows-2 mx-auto">
           {data && data.map(e=>(
              <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl ">
                  <div class="top w-full">
  <img src="/img/feature/magento.svg" alt="Avatar" class="image" style={{width:"100%"}}/>
  <div class="middle">
    <div class="text">{e.text}</div>
  </div>
</div>
            </div> 
           ))}
        </div>
        </div>

    </div>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
