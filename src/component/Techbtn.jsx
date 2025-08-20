import React from 'react'

const Techbtn = ({title}) => {
  return (
    <div className='inline-flex items-center bg-neutral-700/70 p-1 border border-transparent rounded-md text-[10px] text-secondary-foreground text-white transition-colors'>
      {title}
    </div>
  )
}

export default Techbtn
