import React from 'react'

const Techbtn = ({title}) => {
  return (
    <div className='inline-flex px-1.5 py-1 text-[10px] font-medium bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300 hover:border-zinc-700 transition-colors'>
      {title}
    </div>
  )
}

export default Techbtn
