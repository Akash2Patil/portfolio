import React from 'react'
import   mailicon from '../assets/img/mail.svg'
import   linicon from '../assets/img/linkedin.svg'
import   Xicon from '../assets/img/x.svg'
import   logo from '../assets/img/logo.jpg'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between border-[#c8c0c091] border-b p-3 mb-5'>
        <div className="navr flex justify-center items-center gap-3">
          <div className="logo">
            <img className='w-[1.8rem] h-[1.8rem]' src={logo} alt="" />
          </div>
          <div className="navtext">
            <h1 className='text-white text-sm'>Akash Patil</h1>
            <h3 className='text-neutral-400 text-xs'>Software Developer</h3>
          </div>
        </div>
        <div className="navl flex justify-center items-center gap-3">
          <img className='w-[16px] h-[16px]' src={linicon} alt="" />
          <img className='w-[18px] h-[18px]' src={Xicon} alt="" />
          <img className='w-[20px] h-[20px]' src={mailicon} alt="" />
          
        </div>
      </div>
    </>
  )
}

export default Navbar
