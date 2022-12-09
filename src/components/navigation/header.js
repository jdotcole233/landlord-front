import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='w-screen bg-neutral-50'>
            {/* Top Navigation */}
            <section className='flex h-20  w-full p-2 items-center'>
                <div className='text-6xl font-extrabold text-blue-800 mr-3'><span className='text-blue-300'>ex-</span>LandLord</div>
                <div className='flex flex-1 justify-end mr-4'>
                    <ul className='flex justify-around text-md w-64 text-blue-700'>
                        <li className='mr-1'>
                            <Link to="/" >Home</Link>
                        </li>
                        <li className='mr-1'>About</li>
                        <li>
                            <Link to="/contact" >Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className='text-white font-semibold bg-blue-600 px-8 text-lg shadow-md mr-2 py-1 rounded-full'>Register</button>
                    <button className='text-white font-semibold bg-red-600 px-8 text-lg shadow-md mr-2 py-1 rounded-full'>Login</button>
                </div>
            </section>
        </div>
    )
}

export default Header;