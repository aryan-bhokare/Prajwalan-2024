import React, { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import img1 from "../../assets/Prajwalan-memories/1.png";
import img2 from "../../assets/Prajwalan-memories/2.png";
import img3 from "../../assets/Prajwalan-memories/3.png";
import img4 from "../../assets/Prajwalan-memories/4.jpg";
import img5 from "../../assets/Prajwalan-memories/5.png";
import img6 from "../../assets/Prajwalan-memories/6.png";

const MyImageCarousel = () => {
  const slides = [img1, img2, img3, img4, img5, img6];
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative max-h-96 max-w-3xl border-black rounded-xl">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`slide-${index}`} />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full w-5 h-5 cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MyImageCarousel;
