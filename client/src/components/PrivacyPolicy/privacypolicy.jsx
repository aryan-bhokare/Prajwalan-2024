import React from 'react'
import prajwalan from './prajwalan1.png'
const privacypolicy = () => {
  return (
    <div className=' text-white w-90 sm:mx-10 mx-6 my-20 px-20 py-10 rounded-lg flex flex-row backdrop-blur-sm bg-gradient-to-br from-[hsla(0,0%,50%,0.2)] to-[hsla(0,0%,60%,0)] bg-gradient-to-br from-[hsla(0,0%,50%,0.2)] to-[hsla(0,3%,93%,0.2)]'>
     <div>
    <img src={prajwalan} className='mt-9 w-56 h-56 mr-20' alt="..." />
    <p className='text-xl sm:ml-12  mt-7 font-semibold'>Prajwalan 24</p>
    </div>
    
    <div className='ml-36'>
    <u><h2 className='text-2xl mb-7 font-bold'>Privacy Policy :</h2></u>
    <p className='mb-5'><u><strong className='font-semibold text-lg'>Information collected :</strong></u> We collect personal information such as names, email addresses, and browsing data.</p>
    <p className='mb-5'><u><strong className='font-semibold text-lg'>Data usage :</strong></u> Collected information is used for improving our services, personalization, and marketing purposes.</p>
    <p className='mb-5'><u><strong className='font-semibold text-lg'>Data sharing :</strong></u> User data may be shared with third parties for specific purposes, such as analytics or advertising.</p>
    <p className='mb-5'><u><strong className='font-semibold text-lg'>Security measures :</strong> </u>We take steps to protect user data from unauthorized access or breaches through encryption and access controls.</p>
    <p className='mb-5'><u><strong className='font-semibold text-lg'>User rights :</strong></u> Users have the right to access, correct, and delete their personal information. They can contact us to exercise these rights.</p>
    </div>
  </div>
  )
}

export default privacypolicy