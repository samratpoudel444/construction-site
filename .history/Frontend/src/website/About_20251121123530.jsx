import NavBar from "./NavBar"
import image from "./../assets/project.png";
const About= ()=>
{
    return (
      <div className="flex flex-col">
        <div className="flex flex-col">
          <NavBar />
        </div>
        <div className="mt-8 border-b-gray-400 border-b-4">
          <img src={image} alt="" />
        </div>
        
      </div>
    );
}

export default About;
