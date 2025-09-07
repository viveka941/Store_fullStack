import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <>
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <div className="bg-white min-h-screen flex flex-col items-center px-6 py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About <span className="text-pink-600">Bookstore</span>
        </h1>
        <p className="text-gray-600 text-lg">
          “A world of stories, knowledge, and imagination — all in one place.”
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
            alt="Bookstore"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-6">
            At <span className="font-semibold">Bookstore</span>, we believe that
            every book holds the power to inspire, educate, and transform lives.
            Our shelves are filled with a wide variety of genres — from timeless
            classics to modern-day bestsellers, ensuring that every reader finds
            their perfect match.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            Our mission is simple: to foster a love for reading and make
            knowledge accessible to everyone. Whether you’re a student, a
            professional, or just someone who loves stories, our bookstore is
            your trusted companion in the journey of learning and imagination.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Wide collection of books across all genres</li>
            <li>Affordable prices with regular discounts</li>
            <li>Friendly environment for book lovers</li>
            <li>Events, book signings & community meetups</li>
          </ul>
        </div>
      </div>
    </div>
      </div>
      <Footer/>
    </div>
    </>

  )
}

export default About
