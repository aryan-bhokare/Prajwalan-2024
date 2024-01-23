import React from "react";
import HoverCarousel from "hover-carousel";
import img1 from "../../assets/Prajwalan-memories/1.png"
import img2 from "../../assets/Prajwalan-memories/2.png"
import img3 from "../../assets/Prajwalan-memories/3.png"
import img4 from "../../assets/Prajwalan-memories/4.jpg"
import img5 from "../../assets/Prajwalan-memories/5.png"
import img6 from "../../assets/Prajwalan-memories/6.png"


const MyImageCarousel = () => {
  const images = [
    img1,img2,img3,img4,img5,img6
  ];

  return (
    <div>
      <HoverCarousel images={images} />
    </div>
  );
};

export default MyImageCarousel;