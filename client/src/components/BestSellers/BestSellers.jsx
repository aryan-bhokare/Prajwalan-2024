import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import AvatarSlider from './AvatarSlider'

import { childVariants, parentVariants } from '../../animations/common'
import { motion } from 'framer-motion'

function BestSellers() {
  return (
    <>
      <section className='p-4 pb-24 text-white'>
        <div className='container max-w-6xl mx-auto overflow-hidden'>
          <motion.div
            variants={parentVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col items-center  space-y-5  '
          >
            {/* Content */}
            <motion.h1
              variants={childVariants}
              className='text-2xl md:text-3xl font-medium items-center'
            >
              TEAM
            </motion.h1>
            <motion.div
              variants={parentVariants}
              className='flex justify-center  w-full '
            >
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

export default BestSellers
