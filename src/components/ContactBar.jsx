import React from 'react'
import { IoIosCall } from "react-icons/io";
const ContactBar = () => {
  return (
    <div className='bg-white flex flex-row-reverse items-center h-[10px] mt-2'>
        <a>Chat Now</a>
        <div>+917795687594 / +919019595595   |</div>
        <IoIosCall/>
    </div>
  )
}

export default ContactBar