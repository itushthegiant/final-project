import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ handleLogOut, currentUser }) {
    return (
        <div className='bg-blue-700 bg-opacity-90 shadow-2xl mt-2 rounded-2xl ml-4 mr-4'>
            <nav>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                <a href="/" className="flex items-center py-4 px-2">
                                    <span className="font-semibold text-gray-200 text-lg">Linked Services</span>
                                </a>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <Link to='/'>
                                    <button className="py-4 px-2 text-lg rounded text-gray-200 hover:text-black hover:bg-yellow-300 transition duration-400">
                                        Overview
                                    </button>
                                </Link>
                                <Link to='/add-property'>
                                    <button className="py-4 px-2 text-lg rounded text-gray-200 hover:text-black hover:bg-yellow-300 transition duration-400">
                                        Add Property
                                    </button>
                                </Link>
                                <Link to='/jobs'>
                                    <button className="py-4 px-2 text-lg rounded text-gray-200 hover:text-black hover:bg-yellow-300 transition duration-400">
                                        Jobs
                                    </button>
                                </Link>
                                {currentUser && currentUser.is_admin === true ? 
                                <Link to='/signup'>
                                    <button className="py-4 px-2 text-lg rounded text-gray-200 hover:text-black hover:bg-yellow-300 transition duration-400">
                                        Create User
                                    </button>
                                </Link>
                                :
                                <div></div>
                                }
                            </div>
                        </div>

                        {
                            currentUser ?
                                <div className="hidden md:flex items-center space-x-3 ">
                                    <span className='headers text-lg text-yellow-300'>Hello {currentUser.username}</span>
                                    <Link to='/login'>
                                        <button onClick={handleLogOut} className="py-2 px-2 rounded text-sm text-gray-300 hover:text-black hover:bg-red-400 transition duration-500">
                                            Logout
                                        </button>
                                    </Link>
                                </div>
                                :
                                <div className="hidden md:flex items-center space-x-3 ">
                                    <span className="text-gray-300">Hello Guest</span>
                                    <Link to='/login'>
                                        <button className="animate-pulse py-2 px-2 font-medium text-gray-400 rounded hover:bg-yellow-300 hover:text-black transition duration-300">
                                            Log In
                                        </button>
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
