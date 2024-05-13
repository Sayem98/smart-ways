import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { IoIosCheckmarkCircleOutline, IoIosMenu } from "react-icons/io";
import { IoClose } from 'react-icons/io5';
import { FaXTwitter } from "react-icons/fa6";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='w-full text-gray-800 '>
      <p className='flex items-center justify-center gap-1 bg-blue-700 py-1 text-sm px-2 text-white'>Our Only verified <IoIosCheckmarkCircleOutline />  <a href='https://t.me/smrtways_official' className='text-sm text-white bg-blue-700 py-1'>Telegram</a> handler</p>
      <div className='w-full max-w-[1230px] mx-auto py-5 flex items-center justify-between'>
        <div className='flex items-center text-[#4ad54d] gap-4'>
          <img src={Logo} alt='Logo' className='w-20 h-20 sm:w-24 sm:h-24 -pl-3' />
          <h1 className='text-4xl font-bold'>SMRTWAYS</h1>
        </div>

        <div className='md:hidden z-50 relative'>
          <button onClick={toggleMenu} className='text-3xl text-white '>
            {isOpen ? <IoClose className='text-white absolute -top-[67px] right-0' /> : <IoIosMenu />}
          </button>
        </div>

        <ul className={`flex flex-col md:flex-row items-center gap-5 absolute md:relative  w-full md:w-auto md:py-0 transition-all duration-300 ease-in-out ${isOpen ? 'bg-blue-500 pt-20 py-5 h-[300px] w-full px-0' : '-top-full'}`}>
          <a href={`${process.env.PUBLIC_URL}/SMRT_Token_Whitepaper_V1.0.pdf`} target="_blank" rel="noopener noreferrer" className='text-lg text-white'>
          Whitepaper
      </a>
          <a href='/termcondition' className='text-lg text-white'>Terms & Conditions</a>
          <button className='bg-blue-700 rounded-2xl w-28 h-10 text-xl text-white'>Buy</button>
         </ul>
      </div>
    </section>
  )
}

export default Navbar;
