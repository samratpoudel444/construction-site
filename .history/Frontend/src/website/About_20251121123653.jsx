import NavBar from "./NavBar"
import image from "./../assets/project.png";
const About= ()=>
{
    return (
      <div className="flex flex-col">
        <NavBar />
          <img
            src={image}
            alt=""
            className="mt-8 border-b-gray-500 border-b-3"
          />
            
      </div>
    );
}

export default About;
