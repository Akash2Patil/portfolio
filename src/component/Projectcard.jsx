import React from 'react'
import linklogo from '../assets/img/sitelogo.svg'
import gitlogo from '../assets/img/gitlogo.svg'

const Projectcard = ({ projecttitle, description, vidurl, gitlink, sitelink, children }) => {
    return (
        <div className='flex flex-col rounded-lg border border-neutral-700 overflow-hidden'>
            <video className='mx-auto w-full bg-zinc-900 h-[240px] object-cover object-top pointer-events-none' src={vidurl}></video>
            <div className='p-3 flex flex-col'>
                <div className='flex justify-between items-center w-full'>
                    <h3 className='mt-1 font-semibold text-white text-base tracking-tight'>
                        {projecttitle}
                    </h3>
                    <div className='flex justify-center items-center gap-1'>
                        { gitlink &&(
                            
                            <a href={gitlink}><img className='w-[19px] h-[19px]' src={gitlogo} alt="" /></a>)
                 
                        }
                        { sitelink &&(
                            <a href={sitelink}><img className='w-[19px] h-[19px]' src={linklogo} alt="" /></a>)

                       
                        }
                    </div>
                </div>
                <p className='text-neutral-400 text-xs'>
                    {description}
                </p>
                <div className='flex gap-1 mt-2 capitalize'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Projectcard
