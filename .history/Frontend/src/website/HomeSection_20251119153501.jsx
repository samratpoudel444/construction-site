import { useEffect, useState } from "react";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpg";

const images = [img1, img2, img3];

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">
      <img src={images[currentIndex]} alt="" className="w-full h-full" />
    </div>
  );
};

export default HomeSection;
