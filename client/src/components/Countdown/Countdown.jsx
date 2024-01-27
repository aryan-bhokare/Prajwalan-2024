import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
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
  

  return (
    
   <div className='flex flex-col items-center justify-between mt-8 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900'>
  <p className='text-2xl text-white font-bold mb-2 mt-10'>Prajwalan is on the way</p>
     <div className='flex h-10 justify-center p-32 pb-56 rounded-md flex-row -mt-14'>
     
   
     <div className='text-5xl text-center text-white items-center justify-center mr-10 border rounded-[10px] h-36 w-36 p-12 min-w-[150px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
       <span>{timeLeft.days}</span> 
       <div className='  text-xl font-bold text-white pt-16 -ml-3 ' >DAYS(s)</div>
     </div>
     <div className='text-5xl text-center text-white items-center justify-center mr-10 border rounded-[10px] h-36 w-36 p-12 min-w-[150px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
       <span>{timeLeft.hours}</span> 
       <div className='text-xl font-bold text-white pt-16 -ml-5' >HOURS(s)</div>
     </div>
     <div className='text-5xl text-center text-white items-center justify-center mr-10 border rounded-[10px] h-36 w-36 p-12 min-w-[150px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
       <span>{timeLeft.minutes}</span>
       <div className='text-xl font-bold text-white pt-16 -ml-7' >MINUTES(s)</div>
     </div>
     <div className='text-5xl text-center text-white items-center justify-center border rounded-[10px] h-36 w-36 p-12 min-w-[150px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
       <span>{timeLeft.seconds}</span> 
       <div className='text-xl font-bold text-white pt-16 -ml-9' >SECONDS(s)</div>
     </div>
     
   </div>
   </div>
  );
};

export default Countdown;
