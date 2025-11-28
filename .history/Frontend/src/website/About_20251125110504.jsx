import NavBar from "./NavBar"
import image from "./../assets/project.png";
import AboutUs from "./AboutUs";
import OurActivities from "./OurActivities";
import ContactUs from "./ContactUs";


const About= ()=>
{
    return (
      <div className="flex flex-col">
        <NavBar />
        <img src={image} alt="" className="mt-8 border-b-gray-500 border-b-2" />
        <AboutUs />
        <OurActivities />
        ContactUs
      </div>
    );
}

export default About;
