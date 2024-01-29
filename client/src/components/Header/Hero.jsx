import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import v1 from '../../assets/gifs/v1.gif'
import v2 from '../../assets/gifs/v2.gif'
import v3 from '../../assets/gifs/v3.gif'
import v4 from '../../assets/gifs/v4.gif'
import v5 from '../../assets/gifs/v5.gif'

// import vdoSrc from './heroVdo.mp4'

const gifs = [v1, v2, v3, v4, v5];


const Hero = () => {
  const [selectedGif, setSelectedGif] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    setSelectedGif(gifs[randomIndex]);
  }, []);

  const parentVariants = {
    hidden: { x: -300, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { x: -300, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <section id="#">
    <motion.div className={styles.heroSection} variants={parentVariants} initial="hidden" animate="show">
      <div className={styles.imageContainer}>
        <motion.div className={styles.backgroundImage} variants={parentVariants}>
        {/* <img src={v5} alt="Prajwalan GIF" className={`${styles.backgroundImageI} object-cover`} /> */}
        <motion.img
          src={selectedGif}
          alt="Prajwalan GIF"
          className={`${styles.backgroundImageI} object-cover`}
          variants={textVariants}
        />
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
    </section>
  );
};

export default Hero;
