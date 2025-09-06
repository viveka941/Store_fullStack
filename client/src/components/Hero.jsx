import React from 'react'
import book from "../../public/book.png"

function Hero() {
  return (
    <>
      <div className=" flex flex-col md:flex-row items-center justify-between  max-w-screen-xl container md:px-20 px-4">
        
        {/* Left Content */}
        <div className="order-2 w-full md:w-1/2 mt-10 md:mt-32 space-y-8">
          <h1 className="text-black text-4xl font-extrabold">
            Hello, Welcome here to learn something{" "}
            <span className="text-pink-500">new everyday !!!</span>
          </h1>
          <p className="text-black leading-relaxed">
            Hello, and welcome! Here, every day is a chance to learn something new and exciting. 
            Whether it’s a small insight, a fresh idea, or a deep dive into knowledge, this space 
            is designed to inspire curiosity and growth. Stay engaged, explore freely, and let’s 
            make learning a rewarding journey together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <label className="input validator flex items-center gap-2 border rounded-lg px-3 py-2 w-full sm:w-auto">
              <svg
                className="h-5 w-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="Enter your Email"
                required
                className="outline-none flex-1  w-l"
              />
            </label>
            <button className="btn btn-secondary px-6 py-2 rounded-lg">
              Submit
            </button>
          </div>
          <div className="validator-hint hidden text-sm text-red-500 bg-white">
            Enter valid email address
          </div>
        </div>

        {/* Right Image */}
        <div className=" order-1 w-full md:w-1/2 mt-12 md:mt-20  flex justify-center">
          <img src={book} className=" rounded-full not-last:max-w-sm md:max-w-md lg:max-w-lg" alt="Book illustration" />
        </div>
      </div>
      <hr className='my-5' />
    </>
  )
}

export default Hero
