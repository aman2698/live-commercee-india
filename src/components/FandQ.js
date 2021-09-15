import React from "react";
import PropTypes from "prop-types";

const FandQ = ({ data }) => {
  return (
    <div>
      <div >
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-3">
                Frequently Asked Question
              </h1>
              <p className="text-base leading-relaxed  mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            {data &&
              data.map((e,i) => (
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" key={i}>
                  <div className="w-full  px-4 py-2">
                    <details className="mb-4">
                      <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        {e.question}
                      </summary>

                      <span>
                       {e.answer}
                      </span>
                    </details>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

FandQ.propTypes = {
    data:PropTypes.array,
};

export default FandQ;
