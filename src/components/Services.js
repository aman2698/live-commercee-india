import React from 'react'
import PropTypes from 'prop-types'

const Services = ({data}) => {
    return (
        <div id='service' className="bg-secondary  ">
            <br/><br/><br/>
              <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center text-4xl font-bold tracking-wider">
            <h1 className=" text-subtitle"  >OUR SERVICES </h1>
            </div>
            <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center  mt-2">
             <span className="section-title ml-5" > </span>
            </div>
            <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center text-sm font-bold tracking-wider">
            <h1 className=" text-subtitle"  > Whether you need to enhance your existing website, build a new online store, or integrate payment gateways, we got all your needs covered. </h1>
            </div>
            
        </div>
    )
}

Services.propTypes = {

}

export default Services
