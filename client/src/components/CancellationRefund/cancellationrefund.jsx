import React from 'react'
import prajwalan from './prajwalan1.png'
const cancellationrefund = () => {
  return (
    <div className=' text-white w-90 sm:mx-10 mx-6 my-20 px-20 py-10 rounded-lg flex flex-row backdrop-blur-sm bg-gradient-to-br from-[hsla(0,0%,50%,0.2)] to-[hsla(0,0%,60%,0)] bg-gradient-to-br from-[hsla(0,0%,50%,0.2)] to-[hsla(0,3%,93%,0.2)]'>
     <div>
    <img src={prajwalan} className='mt-4 w-56 h-56 mr-20' alt="..." />
    <p className='text-xl sm:ml-12  mt-7 font-semibold'>Prajwalan 24</p>
    </div>
     <div>
     <u><h2 className='text-2xl mb-7 font-extrabold'>Cancellation and Refund Policy:</h2></u>
      <u><h3 className='font-semibold'>Cancellation Procedures:</h3></u>
      <div className='mb-5'>
      <p className='ml-3 font-thin'>Users can cancel their subscriptions or accounts by following these procedures:</p>
      <ul>
        <li className='ml-14'>Specify the method for cancellation (e.g., email, online form).</li>
        <li className='ml-14'>Explain any required notice periods (e.g., 30 days).</li>
      </ul>
      </div>
      
      <u><h3 className='font-semibold'>Refund Eligibility:</h3></u>
      <div className='mb-5'>
      <p className='ml-3'>Users may be eligible for refunds under the following conditions:</p>
      <ul>
        <li className='ml-14'>Dissatisfaction with services.</li>
        <li className='ml-14'>Technical issues.</li>
      </ul>
      </div>
      
      <u><h3 className='font-semibold'>Refund Process:</h3></u>
     <div className='mb-5'>
     <p className='ml-3'>Steps involved in requesting and processing refunds:</p>
      <ul>
        <li className='ml-14'>Submit a refund request through specified channels.</li>
        <li className='ml-14'>Detail the timeline for processing refunds (e.g., within 7 business days).</li>
        <li className='ml-14'>Outline any applicable fees.</li>
      </ul>
     </div>
      
    <u>  <h3 className='font-semibold'>Exceptions:</h3></u>
      <div className='mb-5'>
      <p className='ml-3'>Refunds may not be granted in the following situations:</p>
      <ul>
        <li className='ml-14'>Violations of terms of service.</li>
        <li className='ml-14'>Abuse of refund policies.</li>
      </ul>
      </div>
      
     <u> <h3 className='font-semibold'>Contact Information:</h3></u>
      <div className='mb-5'>
      <p className='ml-3'>For assistance with cancellations or refunds, users can contact customer support at:</p>
      <ul>
        <li className='ml-14'>Email: support@example.com</li>
        <li className='ml-14'>Phone: 1-800-123-4567</li>
      </ul>
      </div>
     </div>
    </div>
  )
}

export default cancellationrefund