import React from 'react'

function Cards({ item }) {
  return (
    <>
      <div className="px-2 mt-10 "> {/* padding between slides */}
        <div className="card w-full  bg-base-100 shadow-xl hover:rounded-xl hover:border-2 transition duration-200 hover:scale-105 ">
          <figure className="h-48 overflow-hidden flex justify-center">
            <img
              src={item.Image}
              alt={item.name}
              className=" h-full w-full"
            />
          </figure>
          <div className="card-body bg-white">
            <h2 className="card-title text-lg">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="text-sm text-gray-600">{item.title}</p>
            <div className="card-actions flex justify-between items-center mt-2">
              <div className="badge badge-outline hover:font-extrabold hover:bg-green-400 hover:text-white">
                ₹ {item.price}
              </div>
              <button className="cursor-pointer px-3 py-1 text-sm rounded-full border hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
