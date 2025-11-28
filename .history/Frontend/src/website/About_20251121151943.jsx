import NavBar from "./NavBar"
import image from "./../assets/project.png";
import AboutUs from "./AboutUs";
import OurActivities from "./OurActivities";

const About= ()=>
{
    return (
      <div className="flex flex-col">
        <NavBar />
        <img src={image} alt="" className="mt-8 border-b-gray-500 border-b-2" />
        <AboutUs />
        <OurActivities />
      </div>
    );
}

export default About;
