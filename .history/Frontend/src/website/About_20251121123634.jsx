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
            className="mt-8 border-b-gray-400 border-b-2"
          />
       
        <div></div>
      </div>
    );
}

export default About;
