import React from 'react'
import EventList from './EventList'
import { childVariants, parentVariants } from '../../animations/common'
import { motion } from 'framer-motion'
function Event() {
  return (
    <>
      <section className='p-4 pb-24 text-white'>
        <div className='container mx-auto max-w-6xl'>
          {/* Content */}
          <motion.div
            variants={parentVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col items-center md:items-start space-y-4'
          >
            <motion.h1
              variants={childVariants}
              className='text-2xl md:text-3xl font-medium pt-2'
            >
            Events
            </motion.h1>
            <motion.h1
              variants={childVariants}
              className='text-slate-400 text-xl md:text-2xl font-thin pt-2'
            >
            List of Events we are conducting this year.
            </motion.h1>
            <motion.p
              variants={childVariants}
              className=' max-w-lg text-center p-2'
            >
              Workshops
            </motion.p>
            <EventList />

            <motion.p
              variants={childVariants}
              className=' max-w-lg text-center p-2'
            >
              Technical Events
            </motion.p>
            <EventList />

            <motion.p
              variants={childVariants}
              className=' max-w-lg text-center p-2'
            >
              Non-technical Events
            </motion.p>
            <EventList />

          </motion.div>
          {/* Events List */}
          
        </div>
      </section>
    </>
  )
}

export default Event
