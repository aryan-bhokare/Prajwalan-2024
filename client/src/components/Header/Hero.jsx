import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import vdoSrc from './heroVdo.mp4'
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
        <motion.div className={styles.scrollBack} variants={parentVariants}>
          <div className={`${styles.heroScrollTextContainer} ${styles.one}`}>
            <p className={styles.scrollP}>
              Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
              * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
              * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
              * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
              * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
              
            </p>
          </div>
        </motion.div>
        <motion.div className={styles.scrollBackBottom} variants={parentVariants}>
          <div className={`${styles.heroScrollTextContainer} ${styles.two}`}>
            <p className={styles.scrollP}>
              Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
              * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
              * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
              * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
              * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan * Prajwalan
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
