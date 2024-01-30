import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Autoplay, Pagination } from 'swiper';
// Avatar
import AvatarCard from './SponsorCard';
import users from '../../data/users';
// Framer Motion
import { motion } from 'framer-motion';

function SliderSponsor() {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const handleInView = () => {
    if (!hasEnteredView) {
      setHasEnteredView(true);
    }
  };

  return (
    <motion.div
      initial='hidden'
      animate={hasEnteredView ? 'show' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      className='text-white h-full max-w-6xl container'
      onAnimationComplete={handleInView}
    >
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
      >
        {users.map((user, idx) => {
          return (
            <SwiperSlide key={user.name}>
              <AvatarCard
                img={user.img}
                name={user.name}
                handle={user.handle}
                gradient={user.gradient}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}

export default SliderSponsor;
