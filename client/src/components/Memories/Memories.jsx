import React from "react";
import MyImageCarousel from "../Carousel/Carousel";
import { motion } from 'framer-motion'
import { childVariants, parentVariants } from '../../animations/common'

function Memories(){
    return (
        <>
       <section id="memories" className='p-4 sm:pb-24 text-white'>
        <div className='container mx-auto max-w-6xl'>
          {/* Content */}
          <motion.div
            variants={parentVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col items-center  space-y-4 pb-14'
          >
            <motion.h1
              variants={childVariants}
              className='text-2xl md:text-3xl font-medium pt-2'
            >
            Memories
            </motion.h1>
            <motion.p
              variants={childVariants}
              className='text-slate-400 max-w-lg font-bold text-center'
            >
              Memories of past Prajwalan.
            </motion.p>
          </motion.div>
          <div className="flex justify-center">
          <MyImageCarousel />
          </div>
        </div>
      </section>
        </>
    )
}

export default Memories;