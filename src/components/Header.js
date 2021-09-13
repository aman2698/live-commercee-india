import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'

const Header = (props) => {
  return (
    <div id='header'>
      <div className='intro'>
        <div className='back'>
          <Navbar />
          <div className='container mx-auto px-4 text-center '>
            <h1 className='header-title  text-5xl'>
              eCommerce Development & Maintenance Services
            </h1>
            <h2 className='header-subtitle text-xl'>
              We are here to fulfill all your online selling requirements. From
              ideating an eCommerce site to designing, developing, & maintaining
              – we stay with you throughout it.{' '}
            </h2>
            <a
                  href='#contact'
                  className='home-cover__btn mt-10'
                >
                  Contact Us
                </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header
