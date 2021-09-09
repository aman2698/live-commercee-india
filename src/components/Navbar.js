import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  //   let listener = null
  const [scrollState, setScrollState] = useState(null)
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  useEffect(() => {
    let ClickListener = document.addEventListener('click', (e) => {
      var navbar = document.getElementById('')
      if (e.target == navbar) {
        setMenuOpen(false)
      }
      console.log(e.target, navbar)
    })
    return () => {
      document.removeEventListener('click', ClickListener)
    }
  }, [])
  useEffect(() => {
    let listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled > 10) {
        if (scrollState !== 'bg-primary shadow') {
          setScrollState('bg-primary shadow')
        }
      } else {
        if (scrollState !== null) {
          setScrollState(null)
        }
      }
    })
    return () => {
      document.removeEventListener('scroll', listener)
    }
  }, [scrollState])
  return (
    <div id='navbar'>
      <div>
        <nav
          className={`fixed flex items-center justify-between flex-wrap p-1 font-sans  z-50 w-full  ${scrollState} `}
        >
          <div className='flex items-center text-xl md:text-2xl flex-shrink-0 text-white mr-6 sm:mx-10 '>
            <a href='#header' style={{ color: 'white' }}>
              Live Commerce India
            </a>
          </div>
          <div className='block lg:hidden text-white-900'>
            <button
              onClick={() => {
                setMenuOpen(!isMenuOpen)
              }}
              className='flex items-center px-3 py-2 border rounded text-white-600 border-white-400  hover:text-white'
            >
              <svg
                className='fill-current h-4 w-4'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          <div
            className={`w-full ${
              isMenuOpen ? 'block' : 'hidden'
            } lg:block flex-grow justify-baseline lg:flex lg:items-baseline lg:w-auto  text-white-900`}
          >
            <div className=' lg:mx-auto  '>
              <a
                id='fea'
                href='#feature'
                className='block mt-4 lg:inline-block text-xl mr-4 py-2 uppercase hover:scale-110 under'
                style={{ color: 'white' }}
              >
                <span className='mr-1'>Feature</span>
              </a>

              <a
                id='abo'
                href='#about'
                className='block mt-4 lg:inline-block text-xl mr-4 py-2 leading-none uppercase  text-white-600 hover:scale-110 mt-4 lg:mt-0 	'
                style={{ color: 'white' }}
              >
                About
              </a>
              <a
                id='ser'
                href='#service'
                className='block mt-4 lg:inline-block text-xl mr-4 py-2 leading-none uppercase  text-white-600 hover:scale-110 mt-4 lg:mt-0 	'
                style={{ color: 'white' }}
              >
                Service
              </a>
              <a
                href='#service'
                className='block mt-4 lg:inline-block text-xl mr-4 py-2 leading-none uppercase  text-white-600 hover:scale-110 mt-4 lg:mt-0 	'
                style={{ color: 'white' }}
              >
                Gallary
              </a>
              <a
                href='#service'
                className='block mt-4 lg:inline-block text-xl mr-4 py-2 leading-none uppercase  text-white-600 hover:scale-110 mt-4 lg:mt-0 	'
                style={{ color: 'white' }}
              >
                Testimonals
              </a>
              <a
                href='#service'
                className='block mt-4 lg:inline-block text-xl mr-4 py-2 leading-none uppercase  text-white-600 hover:scale-110 mt-4 lg:mt-0 	'
                style={{ color: 'white' }}
              >
                Team
              </a>
              <a
                href='#service'
                className='block mt-4 lg:inline-block text-xl mr-4 py-2 leading-none uppercase  text-white-600 hover:scale-110 mt-4 lg:mt-0 	'
                style={{ color: 'white' }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
