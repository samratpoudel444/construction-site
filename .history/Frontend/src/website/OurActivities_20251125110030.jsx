import Blank from "./card/Blank";
import Logo from "./card/Logo";
import road from "../assets/road.jpg";
import sidewalk from "../assets/sidewalk.webp";
import concreting from "../assets/concreting.jpg";
import build from "../assets/build.jpg";

const OurActivities = () => {
  return (
    <div className="flex flex-col sm:p-16">
      <div className="p-4 text-xl font-semibold text-blue-500 border-l-4 border-l-blue-500">
        <h1>Area of Activities</h1>
      </div>
      <div className="sm:flex sm:flex-row flex flex-col-reverse">
        <div className=" sm:flex sm:w-1/2 h-96  sm:p-16 w-full">
          <Blank
            title="Road Construction"
            content="IDCD is one of the most trusted builders with major experience 
            in construction of roads in the country."
          />
        </div>
        <div className="flex justify-center items-center  sm:w-1/2 w-full mt-4 ">
          <Logo Image={road} />
        </div>
      </div>

      <div className="sm:flex sm:flex-row  flex flex-col">
        <div className="flex justify-center items-center  sm:w-1/2 w-full">
          <Logo Image={sidewalk} />
        </div>
        <div className=" flex sm:w-1/2 h-96  sm:p-16">
          <Blank
            title="Sidewalk Construction"
            content="IDCD is one of the most trusted builders with major experience 
            in sidew walk construction of road in the country."
          />
        </div>
      </div>

      <div className="sm:flex sm:flex-row  flex flex-col-reverse">
        <div className=" flex w-1/2 h-96  sm:p-16">
          <Blank
            title="Concreting"
            content="IDCD is one of the most trusted builders with major experience 
            in concreting."
          />
        </div>
        <div className="flex justify-center items-center  w-1/2 ">
          <Logo Image={concreting} />
        </div>
      </div>

      <div className="sm:flex sm:flex-row  flex flex-col">
        <div className="flex justify-center items-center  w-1/2 ">
          <Logo Image={build} />
        </div>
        <div className=" flex w-1/2 h-96  sm:p-16">
          <Blank
            title="Building Construction"
            content="IDCD is one of the most trusted builders with major experience 
            in building construction in the country."
          />
        </div>
      </div>
    </div>
  );
};
export default OurActivities;