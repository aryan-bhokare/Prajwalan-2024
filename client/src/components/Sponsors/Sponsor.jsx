import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import AvatarSlider from './SliderSponsor'

import { childVariants, parentVariants } from '../../animations/common'
import { motion } from 'framer-motion'

function Sponsor() {
  return (
    <>
      <section className='p-4 pb-24 text-white'>
        <div className='container max-w-6xl mx-auto overflow-hidden' id="sponsors">
          <motion.div
            variants={parentVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col items-center  space-y-5'
          >
            {/* Content */}
            <motion.h1
              variants={childVariants}
              className='text-2xl md:text-3xl  items-center'
            >
              Sponsors
            </motion.h1>
            <motion.div
              variants={parentVariants}
              className='flex justify-center  w-full '
            >
              <motion.p variants={childVariants} className='text-slate-400 '>
                Sponsors of Prajwalan 2024 COMING SOON{' '}
              </motion.p>
            </motion.div>
            <AvatarSlider />
            {/* <div className='md:hidden items-center space-x-2 text-indigo-600 font-semibold flex  '>
              <p>See More</p>
              <AiOutlineArrowRight size={12} />
            </div> */}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Sponsor;