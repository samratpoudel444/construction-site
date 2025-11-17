import { useEffect, useState } from "react";
import img1 from "../assets/1.avif";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const images = [img1, img2, img3];

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="w-full h-256">
      <img src={images[currentIndex]} alt="" className="w-full h-full" />
    </div>
  );
};

export default HomeSection;
