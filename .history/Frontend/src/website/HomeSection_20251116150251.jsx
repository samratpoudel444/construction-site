import { useEffect, useState } from "react";
import img1 from"../assets/1.avif";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const HomeSection= ()=>
{
    useEffect(()=>
    {
         setInterval(() => {
           setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
         }, 4000);
    },[])
    const [preview, setPreview]= useState(1);

    return(
       <div className="w-full">
            <img src={img2} alt="" className="w-full" />
       </div>
    )
}

export default HomeSection;