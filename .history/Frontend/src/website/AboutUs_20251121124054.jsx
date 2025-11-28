import img2 from "../assets/2.jpeg";
const AboutUs= ()=>
{
    return (
      <div className="flex flex-row sm:p-16 items-center justify-between">
        <div>
          <div>
            <h1>Who we are</h1>
          </div>
          <div>
            <p></p>
          </div>
        </div>
        <div className="w-1/2">
          <img src={img2} alt="" />
        </div>
      </div>
    );
}

export default AboutUs;
