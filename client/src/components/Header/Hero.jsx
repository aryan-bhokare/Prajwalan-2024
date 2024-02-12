import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import vdoSrc from '../../assets/strip5.mp4';

const Hero = () => {
  const parentVariants = {
    hidden: { x: -300, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.3 },
    },
  };

  const videoVariants = {
    hidden: { x: 500, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
    },
  };

  const childVariants = {
    hidden: { x: -300, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
    },
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div className={styles.heroSection} variants={parentVariants} initial="hidden" animate="show">
      <div className={styles.imageContainer}>
        <motion.div className={styles.backgroundImage} variants={parentVariants}>
          <motion.video
            variants={videoVariants}
            autoPlay
            loop
            muted
            playsInline
            className={`${styles.backgroundImageI} object-cover`}
          >
            <source src={vdoSrc} type="video/mp4" />
          </motion.video>
        </motion.div>
        {isMobile && (
          <div>
            <motion.div className={styles.scrollBack} variants={parentVariants}>
              <div className={`${styles.heroScrollTextContainer} ${styles.one}`}>
                <p className={styles.scrollP}>
                  Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
                  * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
                  * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
                  * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
                </p>
              </div>
            </motion.div>
            <motion.div className={styles.scrollBackBottom} variants={parentVariants}>
              <div className={`${styles.heroScrollTextContainertwo} ${styles.two}`}>
                <p className={styles.scrollP}>
                  Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
                  * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
                  * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
                  * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
                </p>
              </div>
            </motion.div>
            {/* Register Button */}
          </div>
        )}
        {/* <motion.button
              className={`${styles.registerButton} absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 md:mb-10 mb-16 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-lg`}
            >
              Register
            </motion.button> */}
      </div>
    </motion.div>
  );
};

export default Hero;
