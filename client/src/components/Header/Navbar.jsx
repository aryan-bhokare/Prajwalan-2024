import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, AnimatePresence } from 'framer-motion'
import { parentVariants, childVariants } from '../../animations/common'
import {
  mobileContainer,
  mobileFlexContainer,
  mobileLinkVariants,
} from '../../animations/mobileNav'
function Navbar() {
  const [nav, setNav] = useState(false)
  const toggleNav = () => {
    setNav((prev) => {
      return !prev
    })
  }
  const styles = {
    btn: 'px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700',
    navLink: 'hover:text-indigo-600 duration-200 ease-in-out',
    mobileNavLink:
      'hover:text-indigo-600 duration-200 ease-in-out border-b border-white  text-center',
  }

  return (
    <>
      <nav className='p-4 bg-slate-900'>
        <div className='container mx-auto max-w-6xl relative'>
          {/* Flex Container */}

          <motion.div
            variants={parentVariants}
            initial='hidden'
            animate='show'
            className='flex justify-between items-center text-white'
          >
            {/* Logo */}
            <motion.h1
              variants={childVariants}
              className='text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400'
            >
              <span className=''>PRAJWALAN</span>
            </motion.h1>
            {/* Menu Items */}
            <motion.div
              variants={childVariants}
              className='hidden lg:flex space-x-6 text-sm items-center'
            >
             <AnchorLink href='#' className={styles.navLink}>Home</AnchorLink>
             <AnchorLink href='#events' className={styles.navLink}>Events</AnchorLink>
             <AnchorLink href='#memories' className={styles.navLink}>Memories</AnchorLink>
             <AnchorLink href='#sponsors' className={styles.navLink}>Sponsors</AnchorLink>
             <AnchorLink href='#' className={styles.navLink}>About us</AnchorLink>
              {/* <button className={styles.btn}>Register</button> */}
            </motion.div>
            {/* Hamburger Menu */}
            <motion.div
              variants={childVariants}
              className='lg:hidden'
              onClick={toggleNav}
            >
              {nav ? (
                <IoClose size={28} className='text-white' />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </motion.div>
            {/* Mobile Menu */}
            <AnimatePresence>
              {nav && (
                <motion.div
                  variants={mobileContainer}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='absolute top-14 bg-slate-800 z-50 w-full px-28 py-8 rounded-lg'
                >
                  <motion.div
                    variants={mobileFlexContainer}
                    className='flex flex-col items-center space-y-6 '
                  >  
                    <AnchorLink href='#home' className={styles.mobileNavLink}>Home</AnchorLink>
                    <AnchorLink href='#events' className={styles.mobileNavLink}>Events</AnchorLink>
                    <AnchorLink href='#memories' className={styles.mobileNavLink}>Memories</AnchorLink>
                    <AnchorLink href='#sponsors' className={styles.mobileNavLink}>Sponsors</AnchorLink>
                    <AnchorLink href='#' className={styles.mobileNavLink}>About us</AnchorLink>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
