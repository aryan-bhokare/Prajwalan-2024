import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function EventCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const styles = {
    btn: 'px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700',
    navLink: 'hover:text-indigo-600 duration-200 ease-in-out',
    mobileNavLink:
      'hover:text-indigo-600 duration-200 ease-in-out border-b border-white  text-center',
  }

  return (
    <div className={`card-container w-80 bg-slate-800 rounded-lg h-80 text-center overflow-hidden`}>
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        layout
        className="border-2 border-white p-10 rounded-lg bg-white text-black"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          marginTop: !isOpen ? '6em' : '0',
          marginLeft: !isOpen ? '1em' : '0',
          marginRight: !isOpen ? '1em' : '0'
        }}
      >
        <motion.h2 className='text-lg font-bold'>
          EventName
        </motion.h2>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? '' : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
          className={`h-${isOpen ? '80' : ''}`}
        >
          <motion.p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime consequuntur doloribus tenetur, deserunt itaque sit eos deleniti dolorum aliquam atque quae inventore pariatur. Repudiandae voluptatum modi a magni sit quidem?
          </motion.p>
          <Link to="/event"><button className={styles.btn}>Read More</button></Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default EventCard;