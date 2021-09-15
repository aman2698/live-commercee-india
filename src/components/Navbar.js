import React, { useState, useEffect } from "react";
const Navbar = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState(null);
  useEffect(() => {
    let ClickListener = document.addEventListener("click", (e) => {
      let ser = document.getElementById("ser");
      let fea = document.getElementById("fea");
      let abo = document.getElementById("abo");
      let tes = document.getElementById("tes");
      let por = document.getElementById("por");
      let con = document.getElementById("con");
      if (e.target === ser || e.target=== fea || e.target===abo || e.target=== por || e.target===tes || e.target===con) {
        setMenuOpen(false);
      }
      
    });
    return () => {
      document.removeEventListener("click", ClickListener);
    };
  }, []);
  useEffect(() => {
    let listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 10) {
        if (scrollState !== "bg-primary shadow") {
          setScrollState("bg-primary shadow");
        }
      } else {
        if (scrollState !== null) {
          setScrollState(null);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  return (
    <div id="navbar">
      <div>
        <nav
          className={`fixed flex items-center px-4 py-2 justify-between flex-wrap p-1 font-sans  z-50 w-full  bg-primary`}
        >
          <div className="flex items-center text-xl md:text-2xl flex-shrink-0 text-white mr-6 sm:mx-10 ">
            <a href="#header" className="font-sans" style={{ color: "white",fontFamily:"ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" }}>
              {/* Live Commerce India */}
              <img src="/livecommercelogo.jpg" alt="" className="logoImage" />
            </a>
          </div>
          <div className="block lg:hidden text-white-900">
            <button
              onClick={() => {
                setMenuOpen(!isMenuOpen);
              }}
              className="flex items-center px-3 py-2 border rounded text-white-600 border-white-400  hover:text-white"
              style={{ color: "white" }}
            >
              <svg
                className="fill-current text-white aaa h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full ${
              isMenuOpen ? "block" : "hidden"
            } lg:block flex-grow justify-baseline justify-between lg:flex lg:items-baseline lg:w-auto  text-white-900`}
          >
            <div className=" lg:mx-auto   ">
            <a
                id="ser"
                href="#service"
                className="block mt-4 lg:inline-block text-xl mr-4 py-2 leading-none uppercase  text-white-600  hover:scale-110 mt-4 lg:mt-0 	"
                style={{ color: "white" }}
              >
                Service
              </a>
              <a
                id="fea"
                href="#feature"
                className="block mt-4 lg:inline-block text-xl mr-4 py-2 uppercase hover:scale-110 under"
                style={{ color: "white" }}
              >
                <span className="mr-1">Feature</span>
              </a>

              <a
                id="abo"
                href="#about"
                className="block mt-4 lg:inline-block text-xl mr-4 py-2 leading-none uppercase  text-white-600 hover:scale-110 mt-4 lg:mt-0 	"
                style={{ color: "white" }}
              >
                About
              </a>
          
             
              <a
              id="por"
                href="#portfolio"
                className="block mt-4 lg:inline-block text-xl mr-4 py-2 leading-none uppercase  text-white-600 hover:scale-110 mt-4 lg:mt-0 	"
                style={{ color: "white" }}
              >
                Portfolio
              </a>
              <a
              id="tes"
                href="#testimonial"
                className="block mt-4 lg:inline-block text-xl mr-4 py-2 leading-none uppercase  text-white-600 hover:scale-110 mt-4 lg:mt-0 	"
                style={{ color: "white" }}
              >
                Testimonial
              </a>
              <a
              id="con"
                href="#contact"
                className="block mt-4 lg:inline-block text-xl mr-4 py-2 leading-none uppercase  text-white-600 hover:scale-110 mt-4 lg:mt-0 	"
                style={{ color: "white" }}
              >
                ContactUs
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};



export default Navbar;
