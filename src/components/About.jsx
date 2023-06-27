import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { PiTwitterLogoLight } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import Apple from '../assets/Apple.png';
import Google from '../assets/Google Play.png';
import { quickLinks , company , policies } from '../constants';
const About = () => {
  return (
    <div className='flex flex-col justify-between bg-[#373737] w-[1260px] h-[400px]'>
        <div className='flex flex-row ml-10 mt-4'>
          <div className='flex flex-col'>
              <h1 className='font-mulish text-white text-[20px]'>ROYAL BROTHERS</h1>
              <div className='flex flex-row items-center gap-3 mt-4'>
                  <FaRegEnvelope className='text-dimWhite'/>
                  <p className='font-mulish text-dimWhite text-[15px]'> support@royalbrothers.com </p>
              </div>
              <div className='flex flex-row items-center gap-3 mt-4'>
                  <IoCallOutline className='text-dimWhite'/>
                  <p className='text-dimWhite text-[15px]'>+917795687594/+919019595595</p>
              </div>
          </div>
          <div className='flex flex-col  ml-60'>
            <h1 className='font-mulish text-white text-[20px] ml-10'>COMPANY</h1>
            {company.map((comp) => (
              <div key={comp.id} className={`flex gap-3 flex-col ml-10 mt-4`}>
                  <p className='xs:text-[20px] text-[15px] font-mulish text-dimWhite'>{comp.title}</p>
              </div>
            ))}
          </div>
          <div className='flex flex-col items-right ml-60'>
            <h1 className='font-mulish text-white text-[20px] ml-10'>POLICIES</h1>
            {policies.map((policy) => (
              <div key={policy.id} className={`flex gap-3 flex-col ml-10 mt-4`}>
                  <p className='xs:text-[20px] text-[15px] font-mulish text-dimWhite'>{policy.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col items-right mb-40'>
            <h1 className='font-mulish text-white ml-10 text-[20px] mt-6'>QUICK LINKS</h1>
            {quickLinks.map((quickLink) => (
              <div key={quickLink.id} className={`flex gap-3 flex-col ml-10 mt-4`}>
                  <p className='xs:text-[20px] text-[15px] font-mulish text-dimWhite'>{quickLink.title}</p>
              </div>
            ))}
          </div>
          <div className='flex flex-col items-right mb-40'>
            <h1 className='font-mulish text-white ml-60 text-[20px] mt-6'>FOLLOW US</h1>
            <div className='flex flex-row ml-60 gap-4 w-full h-full mt-4'>
                <BsInstagram className='w-[40px] h-[40px] text-dimWhite'/>
                <BiLogoFacebook className='w-[40px] h-[40px] text-dimWhite'/>
                <PiTwitterLogoLight className='w-[40px] h-[40px] text-dimWhite'/>
                <SlSocialLinkedin className='w-[40px] h-[40px] text-dimWhite'/>
                <AiOutlineYoutube className='w-[40px] h-[40px] text-dimWhite'/>
            </div>
          </div>
          <div className='flex flex-col'>
              <h1 className='font-mulish text-white text-[20px] ml-40 mt-6'>DOWNLOAD OUR APP</h1>
              <div className='flex flex-row ml-40 mt-4'>
                  <img src={Apple} className='w-[160px] h-[90px]' alt='apple'/>
                  <img src={Google} className='w-[160px] h-[90px]' alt='google'/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About