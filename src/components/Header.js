import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <div id="header">
      <div className="intro">
        <div className="back">
          <Navbar />
          <div className="container mx-auto px-4 ">
            <h1 className="header-title ">
              eCommerce Development & Maintenance Services
            </h1>
            <h2 className="header-subtitle">We are here to fulfill all your online selling requirements. From ideating an eCommerce site to designing, developing, & maintaining – we stay with you throughout it. </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
