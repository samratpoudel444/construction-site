import Blank from "./card/Blank";
import Logo from "./card/Logo";

fa/FaRoad
x
#fff/#000
#000/#fff
#ddd/#333
#333/#ddd
#ff0/#fff
#000/#ff0
#0ff/#fff
#000/#0ff
#f0f/#fff
#000/#f0f
Code
import { FaRoad } from "react-icons/fa";
const OurActivities = () => {
  return (
    <div className="flex flex-col sm:p-16">
      <div className="p-4 text-xl font-semibold text-blue-500 border-l-4 border-l-blue-500">
        <h1>Area of Activities</h1>
      </div>
      <div className="flex mt-4">
        <div className=" flex w-1/2 h-96  sm:p-16">
          <Blank
            title="Road Construction"
            content="IDCD is one of the most trusted builders with major experience 
            in construction of roads in the country"
          />
        </div>
        <div className="flex justify-center items-center  w-1/2 ">
          <Logo Image="🛣️"/>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default OurActivities;