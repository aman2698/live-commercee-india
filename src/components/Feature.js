import React from "react";
import PropTypes from "prop-types";

const Feature = ({ data }) => {
  return (
    <div style={{ backgroundColor: "#f4f5f7" }}>
      <div id="feature" className="container  mx-auto px-3 py-9">
        <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center text-4xl font-bold tracking-wider">
          <h1 className="text-subtitle">
            eCommerce Platforms for Every Kind of Need{" "}
          </h1>
        </div>
        <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center  mt-2">
          <span className="section-title ml-5"> </span>
        </div>

        <div class="grid grid-flow-col grid-cols-2 grid-rows-4 gap-7 mx-auto  mt-10 md:grid-cols-4 md:grid-rows-2 mx-auto">
          {data &&
            data.map((d) => (
              <div class="w-sm text-center">
                <img class="w-64 circletag" src={d.icon} alt="" />
                <div class="mt-4  text-center">
                  <h1 class="text-xl text-primary font-bold">{d.title}</h1>
                  <p class="mt-4 text-gray-900 text-center">{d.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

Feature.propTypes = {};

export const MemorizedFeature = React.memo(Feature);
