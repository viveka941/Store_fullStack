import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
Navbar

function Contact() {
  return (
    <>
    <div className=''>
     <Navbar/>
     <div className="min-h-screen">
       <div className="bg-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Caption / Heading */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Get in Touch with <span className="text-pink-600">Bookstore</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          “Your gateway to knowledge and imagination. Have questions, feedback,
          or partnership ideas? We’d love to hear from you!”
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg bg-gray-50 rounded-2xl shadow-lg p-8">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full  text-black px-4 py-2 mt-2 border rounded-lg  focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-black px-4 py-2 mt-2 border rounded-lg  focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label className="block  text-gray-700 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full text-black px-4 py-2 mt-2 border rounded-lg  focus:ring-2 focus:ring-pink-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full  bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  
     </div>

      <Footer/>
    </div>
    </>
  )
}

export default Contact
