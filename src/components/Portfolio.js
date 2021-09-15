import React from "react";
import PropTypes from "prop-types";

const Portfolio = ({ data }) => {
   
  return (
    <div id="portfolio" className=" mb-10 ">
      <br />
      <br />
      <br />
      <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center text-4xl font-bold tracking-wider">
        <h1 className=" text-subtitle">OUR PORTFOLIO </h1>
      </div>
      <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center  mt-2">
        <span className="section-title ml-5"> </span>
      </div>

    

      <div className="md:flex md:justify-center md:space-x-8 md:px-5 mt-1 mb-10">
        <div className="grid grid-flow-row  grid-rows-6 gap-12 mx-auto  mt-10 md:grid-cols-3 md:grid-rows-2 mx-auto mb-10">
          {data &&
            data.map((e,i) => (
              
                <div className='shadow-lg group container relative  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div' key={i}>
                  <div>
                  <img className="object-cover w-full  transform duration-700 backdrop-opacity-100 group-hover:opacity-50" src={e.img} alt="portfolio" height="50" width="50"/>
                 
                  </div>
                  <div className=' opacity-0 absolute w-full flex place-content-center group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white text-center  font-sans' style={{ color: "white",wordBreak:"break-word" }}>
                     {e.text}
                    </span>
                  </div>
                </div>
            
            ))}
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
};

Portfolio.propTypes = {
    data:PropTypes.array,
};

export default Portfolio;
