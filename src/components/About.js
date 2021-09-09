import Image from "./../image/about.jpg";

const About = ({ data }) => {
  return (
    <div id="about">
      <div className="container  px-3 ">
        <div className="block md:flex items-center p-4 bg-white  rounded-lg shadow-sm dark:bg-gray-800">
          <img
            alt="mountain"
            className="w-45 block md:flex rounded-md "
            src={Image}
          />
          <div className="block mt-5 md:mt-0 md:flex md:flex-col md:ml-5">
            <h1 className="text-left text-primary text-3xl font-bold">ABOUT US</h1>
            <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center  mt-2">
              <span className="about-title ml-5"> </span>
            </div>

            <p id="job" className="text-gray-800 mt-2">
              {data ? data.paragraph : "loading..."}
            </p>

            <br />
            <h1 className="text-2xl text-primary font-bold">Why Choose Us?</h1>

            <div className="list-style mt-2">
              <div className="grid-col-6 gap-4">
                {data
                  ? data.Why.map((d, i) => (
                      <>
                        <p className="flex text-gray-700">
                          <svg
                            className="w-2 text-gray-500 mx-2"
                            viewBox="0 0 8 8"
                            fill="currentColor"
                          >
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          {d}
                        </p>
                      </>
                    ))
                  : "loading"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default About;
