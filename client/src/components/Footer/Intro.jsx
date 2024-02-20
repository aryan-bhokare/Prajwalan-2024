import React from 'react'
import {
  AiOutlineRadarChart,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillGithub,
} from 'react-icons/ai'
import { SiHashnode } from 'react-icons/si'
import prajwalanImage from '../../assets/prajwalan.jpg'
function Intro() {
  const styles = {
    socialIcon:
      'p-2 duration-300 ease-in-out self-start rounded-md border border-slate-700 bg-slate-800 hover:bg-indigo-600',
  }
  return (
    <>
      {/* Flex Container */}
      <div className='md:col-span-3 lg:col-span-1 flex flex-col space-y-4 justify-start  text-white'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          {/* <AiOutlineRadarChart size={35} /> */}
          <img src={prajwalanImage} alt='Prajwalan Logo' className='w-10 h-10 rounded-full mr-2 sm:mr-2 '></img>
          <h3 className='text-lg font-bold uppercase '>   Prajwalan.</h3>
        </div>
        {/* Intro */}
        <p className='text-slate-300 '>
          Prajwalan'24 - Central India's Biggest Technical Event
        </p>
        {/* Social Icons */}
        <div className='flex space-x-2 cursor-pointer'>
        <a href="https://www.instagram.com/techfest.prajwalan24_gcoea/" target="_blank" rel="noopener noreferrer">
          <div className={styles.socialIcon}>
            <AiOutlineInstagram />
           </div>
        </a>
        <a href="https://www.linkedin.com/company/prajwalan22/" target="_blank" rel="noopener noreferrer">
        <div className={styles.socialIcon}>
            <AiFillLinkedin />
          </div>
        </a> 
        

          
          
         
        </div>
      </div>
    </>
  )
}

export default Intro
