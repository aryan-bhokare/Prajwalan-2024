import React from 'react'
import { useNavigate } from 'react-router-dom';

function NFTCard(props) {

  const navigate = useNavigate();
  const eventDetails = { ...props };
  const handleReadMoreClick = () => {
    // Navigate to the event page and pass props
    navigate('event?event-name=' + eventDetails?.event_name);
  };
  return (
    <>
      <div className='flex group flex-col space-y-4 rounded-lg overflow-hidden border border-slate-400/10 pb-8 hover:shadow-xl duration-500 ease-in-out hover:shadow-white/10 relative h-[350px] w-[328px]'>
        {/* Image & Counter */}

        <div className='flex flex-col items-center justify-center relative'>
          <img src={eventDetails.logo} alt={eventDetails.event_name} className='object-cover w-[60%]' />
        </div>
        {/* Content */}
        <div className='px-6 flex flex-col m '>
          {/* Title */}
          <h1 className='text-xl mx-auto mt-'>  {eventDetails.event_name}</h1>
          <p className='mt-3'>{eventDetails.intro.slice(0, 30) + "..."}</p>
          {/* Price & Like */}
        </div>
        {/* Hover */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='group-hover:flex animate-bounce transition-all ease-in-out duration-8000'>
            <button disabled={eventDetails.desc == null ? true : false} onClick={handleReadMoreClick} id='b1' className='text-sm px-6 py-2 bg-gradient-to-br from-purple-600 to-blue-500 ring-1 ring-blue-500 transition bg-gradient-to-br duration-300 ease-in-out hover:from-blue-500 rounded-md hover:to-purple-600 duration-200 ease-in-out'>
              {eventDetails.desc == null ? "Coming Soon" : "Read More"}
            </button>
          </div>
        </div>


      </div>
    </>
  )
}

export default NFTCard