import Blank from "./card/Blank";
import Logo from "./card/Logo";

const OurActivities = () => {
  return (
    <div className="flex flex-col sm:p-16">
      <div className="p-4 text-xl font-semibold text-blue-500 border-l-4 border-l-blue-500">
        <h1>Area of Activities</h1>
      </div>
      <div className="flex flex- mt-4">
        <div className=" flex flex-row w-1/2 h-96 border sm:p-16">
          <Blank
            title="Road Construction"
            content="IDCD is one of the most trusted builders with major experience 
            in construction of roads in the country"
          />
        </div>
        <div>
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