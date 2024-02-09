import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function EventCard(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const styles = {
    btn: 'px-5 my-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700',
    navLink: 'hover:text-indigo-600 duration-200 ease-in-out',
    mobileNavLink:
      'hover:text-indigo-600 duration-200 ease-in-out border-b border-white  text-center',
  }
  const eventDetails = {...props};
  const handleReadMoreClick = () => {
    // Navigate to the event page and pass props
    navigate('/event', { state: eventDetails });
  };

  return (
    <div className={`card-container w-80 rounded-lg h-72 text-center overflow-hidden`} style={{ backdropFilter: 'blur(5px)', background: 'radial-gradient(100% 100% at 0 0, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.1) 100%), linear-gradient(169.15deg, rgba(255, 255, 255, 0.2), rgba(238, 238, 238, 0.09) 96.79%)' }}>
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        layout
        className="border-2 border-white p-10 rounded-lg bg-white text-black "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          marginTop: !isOpen ? '5em' : '0',
          marginLeft: !isOpen ? '1em' : '0',
          marginRight: !isOpen ? '1em' : '0'
        }}
      >
        <motion.h2 className='text-lg font-bold'>
        {eventDetails.eventTitle}
        </motion.h2>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? '' : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
          className={`h-${isOpen ? '80' : ''} pt-5`}
        > 
          <motion.p>
            {eventDetails.description}
          </motion.p>
          <button onClick={handleReadMoreClick} className={styles.btn}>Read More</button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default EventCard;