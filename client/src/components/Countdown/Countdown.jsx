import React, { useState, useEffect } from 'react';



const Countdown = ({ targetDate }) => {

  const backgroundImageUrl = '../../assets/hexagon.png';

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
     
      const newTargetDate = new Date();
      newTargetDate.setHours(newTargetDate.getHours() + 12);
      setTargetDate(newTargetDate);
    } else {
   
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
    }
  };

  const setTargetDate = (newTargetDate) => {
    
    setTimeLeft({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    targetDateRef.current = newTargetDate;
  };

  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDateRef = React.useRef(targetDate);

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    
    return () => clearInterval(interval);
  }, []);
  

  return (<>
{/* <div className="bg-cover bg-center bg-no-repeat h-[300px] md:h-[500px] " style={{ 
  backgroundImage: `url("https://w0.peakpx.com/wallpaper/262/444/HD-wallpaper-artificial-intelligence-cyber-intelligence.jpg")`,
  width: '100%',
  backgroundPositionY:"bottom"
}}> */}
    <div className=' flex flex-col items-center justify-between bg-transparent sm:bg-transparent md:pt-20'>
       <link rel="stylesheet" href="https://fonts.google.com/?preview.text=01234567890&classification=Display" />
       <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong"></link>
    <h1 className='text-xl text-white font-bold mb-2 mt-10 sm:text-3xl sm:mt-4 text-center'>Prajwalan is on the way</h1>
    <div className='flex sm:flex-row justify-center items-center -ml-0 sm:ml-8 p-2 sm:p-22 pb-14 sm:pb-36  rounded-md mt-4'>
      <div className='text-4xl items-center flex flex-col text-center text-white mb-8 sm:mb-0 mr-4 sm:mr-8 border-spacing-10 shadow-2xl rounded-[10px]  h-14 w-14 p-8 sm:p-12 min-w-[60px] sm:h-36 sm:w-32 sm:min-w-[120px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
        <span className='text-gray-200 text-4xl sm:text-6xl mt-[-17px] sm:mt-[-1px] ' style={{ fontFamily: 'Audiowide' }} >{timeLeft.days}</span> 
        <div className='text-xs sm:text-lg font-bold text-white mt-7 sm:mt-16 -ml-1 sm:-ml-2' >DAYS</div>
      </div>
      <div className='text-4xl items-center flex flex-col text-center text-white mb-8 sm:mb-0 mr-4 sm:mr-8 border-spacing-10 shadow-2xl rounded-[10px] h-14 w-14 p-8 sm:p-12 min-w-[60px] sm:h-36 sm:w-32 sm:min-w-[120px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
        <span className='text-gray-200 text-4xl sm:text-6xl mt-[-17px] sm:mt-[-1px]' style={{ fontFamily: 'Audiowide' }}>{timeLeft.hours}</span> 
        <div className='text-xs sm:text-lg font-bold text-white mt-7 sm:mt-16 -ml-0 sm:-ml-1'>HOURS</div>
      </div>
      <div className='text-4xl items-center flex flex-col text-center text-white mb-8 sm:mb-0 mr-4 sm:mr-8 border-spacing-10 shadow-2xl rounded-[10px] h-14 w-14 p-8 sm:p-12 min-w-[60px] sm:h-36 sm:w-36 sm:min-w-[150px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
        <span className='text-gray-200 text-4xl sm:text-6xl mt-[-17px] sm:mt-[-1px]' style={{ fontFamily: 'Audiowide' }}>{timeLeft.minutes}</span>
        <div className='text-xs sm:text-lg font-bold text-white mt-7 sm:mt-16 -ml-0 sm:-ml-1'>MINUTES</div>
      </div>
      <div className='text-4xl items-center flex flex-col text-center text-white mb-8 sm:mb-0  sm:mr-8 border-spacing-10 shadow-2xl  rounded-[10px] h-14 w-14 p-8 sm:p-12 min-w-[60px] sm:h-36 sm:w-36 sm:min-w-[150px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
        <span className='text-gray-200 text-4xl sm:text-6xl mt-[-17px] sm:mt-[-1px]' style={{ fontFamily: 'Audiowide' }}>{timeLeft.seconds}</span> 
        <div className='text-xs sm:text-lg font-bold text-white mt-7 sm:mt-16 -ml-0 sm:-ml-0'>SECONDS</div>
      </div>
    </div>
  </div>
  {/* </div> */}
  </>
  );
};

export default Countdown;