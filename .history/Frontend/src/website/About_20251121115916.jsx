import NavBar from "./NavBar"
import image from "./../assets/project.png";
const About= ()=>
{
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <NavBar />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    );
}

export default About;
