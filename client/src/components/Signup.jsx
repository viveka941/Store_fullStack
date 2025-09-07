import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form";


function Signup() {
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();
    
        const onSubmit = (data) => console.log(data);
    return (
        <>
            <div className='flex h-screen items-center justify-center '>
                <div id="my_modal " className='border-[2px] p-4 shadow-md'>
                    <div className=" bg-white text-black">
                        <form onSubmit={handleSubmit(onSubmit)} method="div">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            
                            >✕</Link>
                        
                        <h3 className="font-bold text-lg">Signup</h3>
                        {/* name */}
                        <div className='mt-4 space-y-2 text-black'>
                            <span>Name</span> <br />
                            <input type="text"  placeholder='Enter your name'
                             className='w-80 px-3 py-1 border rounded-md outline-none text-black'
                             {...register("name", { required: true })}
                             /> <br />
                             {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* email */}
                        <div className='mt-4 space-y-2 text-black'>
                            <span>Email</span> <br />
                            <input type="email" name="" id="" placeholder='Enter your email' 
                            className='w-80 px-3 py-1 border rounded-md outline-none text-black'
                            {...register("email", { required: true })}
                            /> <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span> <br />
                            <input type="password" name="" id="" placeholder='Enter your password' 
                            className='w-80 px-3 py-1 border rounded-md outline-none' 
                            {...register("password", { required: true })}
                            /> <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* login */}
                        <div className='flex justify-around mt-4'>
                            <button className="btn btn-secondary hover:bg-pink-700 duration-200">Signup</button>
                            <p>
                                have a Account? <Link to="/" className='underline text-blue-400'>Login</Link>{" "}
                            </p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
