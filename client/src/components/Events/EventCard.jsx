import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import sty from './EventCard.module.css'

function EventCard(props) {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const styles = {
    btn: 'px-5 my-5 text-white rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700',
    navLink: 'text-white hover:text-indigo-600 duration-200 ease-in-out',
    mobileNavLink:
      'text-white hover:text-indigo-600 duration-200 ease-in-out border-b border-white  text-center',
  }
  const eventDetails = {...props};
  const handleReadMoreClick = () => {
    // Navigate to the event page and pass props
    navigate('event?event-name='+eventDetails?.event_name);
  };

  return (
<div className={sty.card}>
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        layout
        className="border-2 border-white p-5 rounded-lg bg-white text-black "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          marginTop: !isOpen ? '5em' : '0',
          marginLeft: !isOpen ? '1em' : '0',
          marginRight: !isOpen ? '1em' : '0'
        }}
      >
        <motion.h2 className='text-lg font-bold'>
          <motion.img style={{maxWidth:"50%",margin:"auto",padding:"2rem 0"}} src={eventDetails.logo} alt={eventDetails.event_name} />
        {eventDetails.event_name}
        </motion.h2>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? '' : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
          className={`h-${isOpen ? '80' : ''} pt-5`}
        > 
          <motion.p>
            {(eventDetails.intro).slice(0,75)+"..."}
          </motion.p>
          
          <button disabled={eventDetails.desc == null?true:false} onClick={handleReadMoreClick} id='b1' className="relative inline-flex my-4 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-300">
    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
        {eventDetails.desc == null?"Coming Soon":"Read More"}
    </span>
</button>




        </motion.div>
      </motion.div>
    </div>
  );
}

export default EventCard;