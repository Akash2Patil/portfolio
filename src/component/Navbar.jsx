import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="header sticky top-0 bg-zinc-900 flex justify-between py-3 px-10 text-white">
        <div className="logo text-2xl">Akash patil</div>
        <div className="links">
          <ul className='flex gap-5 text-lg'>
            <li>About Me</li>
            <li>Education</li>
            <li>Project</li>
            <li><button>Resume</button></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
