import React from 'react';
import prajwalan from './prajwalan1.png'
const CustomerSupport = () => {
  return (
    <div className=' text-white w-90 sm:mx-10 mx-6 my-20 px-20 py-10 rounded-lg flex flex-row backdrop-blur-sm bg-gradient-to-br from-[hsla(0,0%,50%,0.2)] to-[hsla(0,0%,60%,0)] bg-gradient-to-br from-[hsla(0,0%,50%,0.2)] to-[hsla(0,3%,93%,0.2)]'>
    
    <div>
    <img src={prajwalan} className='mt-4 w-56 h-56 mr-20' alt="..." />
    <p className='text-xl sm:ml-12  mt-7 font-semibold'>Prajwalan 24</p>
    </div>
      
      <div >
      <u><h2 className='text-2xl mb-7 font-bold'>Contact Customer Support:</h2></u>
      
      <p>If you need assistance or have any questions, please feel free to reach out to our customer support team:</p>
      <ul >
      <li className='ml-10'><span className='font-semibold'>Email:</span> support@example.com</li>
      <li className='ml-10'><span className='font-semibold'>Phone:</span> 123-456-7890</li>
        <li className='flex items-center mt-5 font-semibold'>Live Chat:  
         <form className='ml-2 '>
          <input type="text" placeholder="Type your message..." className="font-normal text-black border bg-gray-300 border-gray-300 rounded-md px-2 py-1 mr-2  " />
          <button type="submit" className="font-normal bg-blue-500 text-white rounded-md px-4 py-1">Send</button>
         </form>
         </li>
      </ul>
      <p className='mb-8 mt-7 '><span className='font-semibold'>Our availability:</span> Monday-Friday: 9:00 AM to 5:00 PM (EST)</p>
     
      <div>
      <hr style={{ display: 'block', width: "100%", marginLeft: 0, marginRight: 0 }} className='my-10' />
      <p className='mt-10'>We strive to respond to all inquiries within 24 hours.</p>
      </div>
      </div>
      
    </div>
  );
};

export default CustomerSupport;
