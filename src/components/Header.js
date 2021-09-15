import React from 'react'
import Navbar from './Navbar'

const Header = (props) => {
  return (
    <div id='header'>
      <div className='intro '>
        <div className='back'>
          <Navbar />
          <div className='container mx-auto px-4 text-center '>
            <h1 className='header-title  text-4xl md:text-5xl  js-show-on-scroll' style={{fontFamily:"ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"}}>
              eCommerce Development & Maintenance Services
            </h1>
            <h2 className='header-subtitle js-show-on-scroll text-xl hidden md:flex'>
              We are here to fulfill all your online selling requirements. From
              ideating an eCommerce site to designing, developing, & maintaining
              – we stay with you throughout it.{' '}
            </h2>
            <a
                  href='#contact'
                  className='home-cover__btn mt-10 js-show-on-scroll'
                >
                  Contact Us
                </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Header
