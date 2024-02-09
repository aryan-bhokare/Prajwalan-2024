import React from 'react'
import prajwalan from './prajwalan1.png'
const termsofservice = () => {
  return (
    <div className=' text-white w-90 sm:mx-10 mx-6 my-20 px-20 py-10 rounded-lg flex flex-row backdrop-blur-sm bg-gradient-to-br from-[hsla(0,0%,50%,0.2)] to-[hsla(0,0%,60%,0)] bg-gradient-to-br from-[hsla(0,0%,50%,0.2)] to-[hsla(0,3%,93%,0.2)]'>
     <div>
    <img src={prajwalan} className=' w-96 h-56 mr-20 mt-14' alt="..." />
    <p className='text-xl sm:ml-12  mt-7 font-semibold'>Prajwalan 24</p>
    </div>
   <div className='ml-36 '>
   <u><h2 className='text-2xl mb-7 font-bold'>Terms of Service :</h2></u>
   
    <u><h3 className=' font-extrabold'> User Obligations :</h3></u>
    <p className='mb-7'>
      Users are required to adhere to certain responsibilities when using our website or service. These obligations are outlined in this section to ensure proper usage and respect for all users.
    </p>
    
    <u><h3 className='font-extrabold'>Intellectual Property Rights :</h3></u>
    <p className='mb-7'> 
      We specify ownership rights related to content, trademarks, and copyrights in this section. Users are informed about their rights and limitations concerning the intellectual property present on our platform.
    </p>
    
   <u> <h3 className='font-extrabold'>Limitations of Liability :</h3></u>
    <p className='mb-7'>
      Our liability for damages or losses incurred by users is limited under certain circumstances, as explained in this section. Users should review this to understand the extent of our responsibility in different scenarios.
    </p>
    
   <u> <h3 className='font-extrabold'>Dispute Resolution :</h3></u>
    <p className='mb-7'>
      Procedures for resolving disputes between our company and users, such as arbitration or mediation, are outlined in this section. Users are encouraged to follow these procedures for efficient resolution of any conflicts.
    </p>
   </div>
  </div>
  )
}

export default termsofservice