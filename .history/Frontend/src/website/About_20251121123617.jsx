import NavBar from "./NavBar"
import image from "./../assets/project.png";
const About= ()=>
{
    return (
      <div className="flex flex-col">
          <NavBar />

        <div >
          <img src={image} alt="" />
        </div>
        <div>

        </div>
      </div>
    );
}

export default About;
