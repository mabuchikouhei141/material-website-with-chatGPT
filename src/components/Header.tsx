import "@/style/globals.css"
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <>
      <header className="fixed top-0 w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-5 shadow-md z-50">
        <div className="z-40 container mx-auto flex justify-between items-center px-4">
          <Link href="/">
            <span className="text-3xl font-extrabold tracking-tight cursor-pointer">LOGO</span>
          </Link>
          <nav className="space-x-6 hidden lg:flex">
            <Link href="#home">
              <span className="hover:text-indigo-200 transition duration-300 cursor-pointer">HOME</span>
            </Link>
            <Link href="#about">
              <span className="hover:text-indigo-200 transition duration-300 cursor-pointer">ABOUT</span>
            </Link>
            <Link href="#concept">
              <span className="hover:text-indigo-200 transition duration-300 cursor-pointer">CONCEPT</span>
            </Link>
            <Link href="#works">
              <span className="hover:text-indigo-200 transition duration-300 cursor-pointer">WORKS</span>
            </Link>
            <Link href="#service">
              <span className="hover:text-indigo-200 transition duration-300 cursor-pointer">SERVICE</span>
            </Link>
            <Link href="#menber">
              <span className="hover:text-indigo-200 transition duration-300 cursor-pointer">MENBER</span>
            </Link>
            <Link href="#contact">
              <span className="hover:text-indigo-200 transition duration-300 cursor-pointer">CONTACT</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header;
