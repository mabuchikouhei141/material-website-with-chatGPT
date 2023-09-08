import "@/style/globals.css"
import Link from 'next/link';
import React, { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
  className="text-3xl p-4 text-white fixed top-3 right-1 md:right-8 lg:hidden z-50 focus:outline-none"
  onClick={() => setIsOpen(!isOpen)}
>
  <div 
    className={`border-2 w-8 mb-1 border-white transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2 border-black' : ''}`} 
  ></div>
  <div 
    className={`border-2 w-8 mb-1 border-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} 
  ></div>
  <div 
    className={`border-2 w-8 border-white transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2 border-black ' : ''}`} 
  ></div>
</button>

      <aside
        className={`fixed flex justify-center items-center top-0 left-0 h-full w-full bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 text-black bg-opacity-50 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Menu</h1>
    <nav className="flex justify-center items-center space-x-4">
        <ul className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
            <li>
                <Link href="#home">
                    <span className="flex md:text-5xl md:px-5 md:py-5 justify-center bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                    HOME
                    </span>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <span className="flex md:text-5xl md:px-5 md:py-5 justify-center bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                    ABOUT
                    </span>
                </Link>
            </li>
            <li>
                <Link href="#concept">
                    <span className="flex md:text-5xl md:px-5 md:py-5 justify-center bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                    CONCEPT
                    </span>
                </Link>
            </li>
            <li>
                <Link href="#works">
                    <span className="flex md:text-5xl md:px-5 md:py-5 justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                    WORKS
                    </span>
                </Link>
            </li>
            <li>
                <Link href="#service">
                    <span className="flex md:text-5xl md:px-5 md:py-5 justify-center bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                    SERVICE
                    </span>
                </Link>
            </li>
            <li>
                <Link href="#menber">
                    <span className="flex md:text-5xl md:px-5 md:py-5 justify-center bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                    MENBER
                    </span>
                </Link>
            </li>
            <li>
                <Link href="#contact">
                    <span className="flex md:text-5xl md:px-5 md:py-5 justify-center bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                    CONTACT
                    </span>
                </Link>
            </li>
        </ul>
    </nav>
</div>

      </aside>
    </>
  );
}

export default Sidebar;
