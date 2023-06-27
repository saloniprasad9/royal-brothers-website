import React from 'react'
import logo  from '../assets/logo.png';
import { HiMenu } from "react-icons/hi";
import subscription from '../assets/subscription.png';
import { HiChevronDown } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { navLinks } from '../constants';
import ContactBar from './ContactBar';
const Navbar = () => {
  return (
    <div className='w-screen h-[120px] z-10 flex flex-col bg-[#ffffff] fixed drop-shadow-lg'>
        <ContactBar/>
        <div className='px-2 flex flex-row justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <HiMenu className='w-[50px] h-[30px]'/>
                <img src={logo} alt='logo' className='w-[130px] h-[60px] '/>
                <img src={subscription} alt='subscription' className='w-[70px] h-[60px] ml-16 cursor-pointer hover:bg-yellow-400'/>
                <div className='flex flex-row gap-8 items-center'>
                    <h5 className='hover:bg-yellow-300'>Tariff</h5>
                    <div className='gap-2 flex flex-row items-center'>
                        <h5 className='hover:bg-yellow-300'>What's New?</h5> 
                        <HiChevronDown/>
                    </div>
                    <h5 className='hover:bg-yellow-300'>Offers</h5>
                    <div className='gap-2 flex flex-row items-center'>
                        <h5 className='hover:bg-yellow-300'>Partner with Us</h5> 
                        <HiChevronDown/>
                    </div>
                </div>
                <div className='flex flex-row gap-2 px-2 py-4 ml-20 w-[140px] h-[60px] items-center border-2 border-yellow-400 rounded-md '>
                    <IoLocationOutline/>
                    <h5 className='hover:bg-yellow-300'>Bangalore</h5>
                    <HiChevronDown/>
                </div>
                <div className='flex flex-row gap-2 items-center ml-40'>
                    <button>LogIn</button>
                    <button className='bg-[#fed250] px-2 py-2 border rounded-md'>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar