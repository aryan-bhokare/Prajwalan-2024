import React from 'react'
import EventList from './EventList'
import { childVariants, parentVariants } from '../../animations/common'
import { motion } from 'framer-motion'
function Event() {
  return (
    <>
      <section id='events' className='p-4 pb-24 text-white'>
        <div className='container mx-auto max-w-6xl'>
          {/* Content */}
          <motion.div
            variants={parentVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col items-center space-y-4'
          >
            <motion.h1
              variants={childVariants}
              className='text-2xl md:text-3xl font-medium pt-2'
            >
            Events
            </motion.h1>
            <motion.h2
              variants={childVariants}
              className='text-slate-400 text-xl md:text-2xl font-thin pt-2 pl-14'
            >
            List of Events we are conducting this year.
            </motion.h2>
            <motion.h1
              variants={childVariants}
              className='text-xl text-center p-2'
            >
              Workshops
            </motion.h1>
            <EventList category="Workshop" />

            <motion.h1
              variants={childVariants}
              className=' text-xl text-center p-2'
            >
              Technical Events
            </motion.h1>
            <EventList category="Technical"/>

            <motion.h1
              variants={childVariants}
              className=' text-xl text-center p-2'
            >
              Non-technical Events
            </motion.h1>
            <EventList category="Non Technical"/>
            <motion.h1 id='esummit'
              variants={childVariants}
              className=' text-xl text-center p-2'
            >
              E-Summit
            </motion.h1>
            <EventList category="E-Sammelan"/>

          </motion.div>
          {/* Events List */}
          
        </div>
      </section>
    </>
  )
}

export default Event
