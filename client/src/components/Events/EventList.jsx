import React from 'react'
import events from '../../data/eventdata'
import EventCard from './EventCard'
import { childVariants, parentVariants } from '../../animations/common'
import { motion } from 'framer-motion'
function EventList() {
  return (
    <>
      <motion.div
        variants={parentVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      >
        {/* Collection Card  */}
        {events.map((event, idx) => {
          return (
            <motion.div variants={childVariants} key={idx}>
              <EventCard
                {...event}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </>
  )
}

export default EventList
