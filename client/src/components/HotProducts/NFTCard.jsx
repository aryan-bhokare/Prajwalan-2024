import React from 'react'
import { AiOutlineClockCircle, AiFillHeart } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'

function NFTCard({ img, title, price, likes, sale }) {
  return (
    <>
      <div className='flex group flex-col space-y-10 rounded-lg overflow-hidden border border-slate-400/10 pb-8 hover:shadow-xl duration-500 ease-in-out hover:shadow-white/5 relative'>
        {/* Image & Counter */}
        <div className='flex flex-col items-start relative'>
          <img src={img} alt='NFT' className='object-cover' />
          {sale && (
            <div className='flex space-x-2 items-center justify-center px-4 py-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl absolute bottom-5 left-5'>
              <AiOutlineClockCircle />
              <p className='text-xs'>66 : 08 : 19 : 27</p>
            </div>
          )}
        </div>
        {/* Content */}
        <div className='px-6 flex flex-col space-y-3'>
          {/* Title */}
          <h1>{title}</h1>
          {/* Price & Like */}
        </div>
        {/* Hover */}
        <div className='absolute top-1/4 left-1/3 md:left-1/4 group-hover:flex animate-bounce transition-all ease-in-out duration-8000'>
          <button className='text-sm px-6 py-2 bg-gradient-to-br from-purple-600 to-blue-500 ring-1 ring-blue-500 transition bg-gradient-to-br duration-300 ease-in-out hover:from-blue-500 rounded-md hover:to-purple-600  duration-200 ease-in-out'>
            Place bid
          </button>
        </div>
      </div>
    </>
  )
}

export default NFTCard