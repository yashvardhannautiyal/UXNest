import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <footer className=" px-4 md:px-16 lg:px-28 py-8">
       <div className='grid grid-cols-1 md:grid-cols-3'>
        <div>
          <h2 className='text-lg font-bold mb-4 text-white'>
            About Us
          </h2>
          <p className='text-gray-300'>  
          Welcome to UXNest where coding meets simplicity and efficiency. Our mission is to empower developers with the ultimate coding experience. 
          </p>
        </div>
        <div>
        <h2 className='text-lg font-bold mb-4 text-white'>Quick Links</h2>
        <ul>
          <li><a href="" className='hover:underline text-gray-300'>Home</a></li>
          <li><a href="" className='hover:underline text-gray-300'>Services</a></li>
          <li><a href="" className='hover:underline text-gray-300'>Contact</a></li>
          <li><a href="" className='hover:underline text-gray-300'>About</a></li>
        </ul>
        </div>
        <div>
        <h2 className='text-lg font-bold mb-4 text-white'>Follow Us</h2>
        <ul className="flex space-x-4">
          <li> 
            {" "}
            <FaFacebook />{""}
          <a href="" className="hover:underline text-gray-300">
          Facebook</a></li>
          <li> <FaTwitter />
          <a href="" className="hover:underline text-gray-300">Twitter</a></li>
          <li><FaInstagramSquare />
          <a href="" className="hover:underline text-gray-300">Instagram</a></li>
        </ul>
        </div>

       </div>
       <div className="border-t border-t-gray-600 pt-8 text-gray-300 text-center mt-7">
        <span className='flex items items-center'> <FaRegCopyright />2024 code with UXNest. All Rights Reserved.</span>
       </div>
    </footer>
    </>
  )  

}

export default Footer;