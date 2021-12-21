import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <div>
            <nav className='rounded-lg'>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                <a href="/login" className="flex items-center py-4 px-2">
                                    <span className="font-semibold text-gray-500 text-lg">Linked Services</span>
                                </a>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <Link to='/overview'><button className="py-4 px-2 text-gray-500 font-semibold border-b-4 border-green-500 hover:text-green-500 transition duration-300">Overview</button></Link>
                                {/* <button className="py-4 px-2 text-gray-500 font-semibold border-b-4 border-green-500 hover:text-green-500 transition duration-300">Services</button> */}
                                <Link to='/add-property'><button className="py-4 px-2 text-gray-500 font-semibold border-b-4 border-green-500 hover:text-green-500 transition duration-300">Add Property</button></Link>
                                {/* <button className="py-4 px-2 text-gray-500 font-semibold border-b-4 border-green-500 hover:text-green-500 transition duration-300">Contact Us</button> */}
                            </div>
                        </div>

                        {
                            props.currentUser ?
                                <div className="hidden md:flex items-center space-x-3 ">
                                    <span className='headers text-lg'>Hello {props.currentUser.username}</span>
                                    <Link to='/login'>
                                        <button onClick={props.handleLogOut} className="py-2 px-2 font-medium text-white bg-red-500 rounded hover:bg-red-400 transition duration-300">Logout</button>
                                    </Link>
                                </div>
                                :
                                <div className="hidden md:flex items-center space-x-3 ">
                                    <span>Hello Guest</span>
                                    <Link to='/login'>
                                        <button className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</button>
                                    </Link>
                                    <Link to='/signup'>
                                        <button className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</button>
                                    </Link>

                                </div>
                        }

                        {/* <div className="md:hidden flex items-center">
                            <button className="outline-none mobile-menu-button">
                                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                    x-show="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div> */}
                    </div>
                </div>
                {/* <div className="hidden mobile-menu">
                    <ul className="">
                        <li className="active"><button className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</button></li>
                        <li><button className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</button></li>
                        <li><button className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</button></li>
                        <li><button className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</button></li>
                    </ul>
                </div> */}
            </nav>
        </div>
    )
}

export default NavBar
