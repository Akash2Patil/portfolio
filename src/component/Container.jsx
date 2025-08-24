import React from 'react'

const Container = ({title,subtitle,children,className}) => {
  return (
    <div className={`relative w-full h-full bg-[#1E1E1E] shadow-xl border border-neutral-600 rounded-lg p-3 ${className}`}>
      <div className='w-full mb-2'>
        <div className='flex justify-between items-center'>
            <p className='text-white text-xs'>
                {title}
            </p>
            <p className='text-neutral-500 text-xs'>{subtitle}</p>
        </div>
        <div className='top-7 bg-neutral-600 mt-1 w-full h-[0.9px]'></div>
      </div>
      <div className='h-[70%]'>
      {children}
      </div>
      
    </div>
  )
}

export default Container
