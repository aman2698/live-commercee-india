import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const initialState = {
  name: "",
  email: "",
  message: "",
  phone: "",
  company: "",
  country: "",
  file: null,
};
const ContactUs = (props) => {
  const [{ name, email, message, phone, company, country, file }, setState] =
    useState(initialState);

  const handleCountry = (code) => {
    console.log(code);
    setState((prevState) => ({ ...prevState, country: code }));
  };
  return (
    <div
      className=""
      id="contact"
      style={{
        backgroundColor: "linear-gradient(to right, #212529 0%, #1c2023 100%)",
      }}
    >
      <div className="container  mx-auto px-3 py-9">
        <div className="block md:flex  p-4 bg-white  rounded-lg shadow-sm ">
          <div
            className=" w-full md:w-2/3 block  mx-1"
            style={{ wordBreak: "break-word" }}
          >
            <div className="block mt-5 md:mt-0 md:flex md:flex-col md:ml-0 ">
              <h1 className="text-left text-4xl font-bold">GET IN TOUCH</h1>
              <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center  mt-2">
                <span className="contact-title ml-5"> </span>
              </div>
            </div>
            <h1 className="text-md mt-4">Please fill out the form below to send us an email and we will get back to you as soon as possible.</h1>
            <form className="block">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-2">
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Name
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Email
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="text"
                  />
                </div>
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-2">
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Mobile/phone
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="number"
                  />
                </div>
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Organization/Company
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="text"
                  />
                </div>
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-2">
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Country
                  </label>
                  <div
                    className=" px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    style={{
                      backgroundColor: "floralwhite",
                      color: "black",
                      // height: "35px",
                    }}
                  >
                    <ReactFlagsSelect
                      selected={country}
                      // className="form-control"
                      onSelect={handleCountry}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Document any
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="file"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 mt-5 mx-2">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Message
                </label>
                <textarea
                  className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  rows="5"
                />
              </div>
           
              <button className='text-white font-bold py-2 px-4 rounded-full border-solid border-4 border-white sendMessage mt-5'>
                Send Message
              </button>
            </form>
          </div>
          <div className=" md:w-1/3 block  mx-10 md:px-10">
            <h1 className="text-3xl mt-5">Contact Info</h1>
            <div className="mt-10">
            <>
                <span className="block">
                  <i className="fa fa-map-marker"></i> Address
                </span>
                <p className="block mt-3">
                {props.data ? props.data.address : "loading"}
                </p>
              </>
            </div>

            <div className="mt-10">
            <>
                <span className="block">
                  <i className="fa fa-phone"></i> Phone
                </span>
                <p className="block mt-3">
                {props.data ? props.data.phone : "loading"}
                </p>
              </>
            </div>
            <div className="mt-10">
            <>
                <span className="block">
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                <p className="block mt-3">
                {props.data ? props.data.email : "loading"}
                </p>
              </>
            </div>
          </div>
        </div>
        <hr className="mx-auto mt-10"style={{width: '75%',height:"1px",color:"grey" }}></hr>
        <div className="flex justify-center">
        <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
        </div>
      </div>
    </div>
  );
};


export default ContactUs;
