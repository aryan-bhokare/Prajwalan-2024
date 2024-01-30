import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import gcoealogo from '../../assets/gcoea.png'
function Outro() {
  return (
    <>
      {' '}
      <div className='border-t border-slate-700 mt-10 text-center py-4 text-slate-200 '>
        <div className='flex flex-col md:flex-row items-center space-x-1 '>
          <p >&copy; 2024 Prajwalan made with {'   '}</p>
          <AiFillHeart size={20} className='text-rose-500' />
          <p>by GCOEA</p>
          <img src={gcoealogo} alt='Gcoea Logo' className='w-5 h-5 rounded-full mr-2 sm:mr-2 -mt-1 '></img>
        </div>
      </div>
    </>
  )
}

export default Outro
