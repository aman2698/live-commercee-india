import React from 'react'
import PropTypes from 'prop-types'

const Feature = ({data}) => {
    return (
        <div id="feature" className="container  mx-auto px-3 mt-5" style={{backgroundColor:"#f4f5f7"}}>
            <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center text-4xl font-bold tracking-wider">
            <h1 className="text-subtitle" >eCommerce Platforms for Every Kind of Need </h1>
            </div>
            <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center  mt-2">
             <span className="section-title ml-5" > </span>
            </div>
            
        <div class="grid grid-flow-col grid-cols-2 grid-rows-4 gap-7 mx-auto  mt-10 md:grid-cols-4 md:grid-rows-2 mx-auto">
            {data&&data.map(d =>(
                 <div className=" grid  ">
   <div className="col-span-1 text-center"> <i className=""><img src={d.icon} className="circletag "  alt="" /></i></div>
   <div className="col-span-1">
  <h1 className="text-2xl font-semibold text-subtitle text-center mt-1  " style={{fontFamily: "'Raleway', sans-serif"}} >{d.title}</h1>
  <h4 className="text-sm text-justify mt-5 font-sans ">{d.text}</h4>
  </div>
  </div>
            ))} 
</div>
</div>
    )
}

Feature.propTypes = {

}

export const MemorizedFeature = React.memo(Feature)
