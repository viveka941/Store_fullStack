import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
    return (
        <>
            <div className='flex h-screen items-center justify-center '>
                <div id="my_modal " className='border-[2px] p-4 shadow-md'>
                    <div className=" bg-white text-black">
                        <form method="div">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Signup</h3>
                        {/* name */}
                        <div className='mt-4 space-y-2 text-black'>
                            <span>Name</span> <br />
                            <input type="email" name="" id="" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none text-black' />
                        </div>
                        {/* email */}
                        <div className='mt-4 space-y-2 text-black'>
                            <span>Email</span> <br />
                            <input type="email" name="" id="" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none text-black' />
                        </div>
                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span> <br />
                            <input type="password" name="" id="" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' />
                        </div>
                        {/* login */}
                        <div className='flex justify-around mt-4'>
                            <button className="btn btn-secondary hover:bg-pink-700 duration-200">Login</button>
                            <p>
                                have a Account? <Link to="/" className='underline text-blue-400'>Login</Link>{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
