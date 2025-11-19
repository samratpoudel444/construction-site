import image from "../assets/5.png"
const Quote= ()=>
{
    return (
      <div className="bg-gray-300 sm:px-32  sm:flex sm:flex-row flex flex-col-reverse justify-between items-center font-extralight text-2xl w-full">
        <div className="p-4">
          <h1 className="font-bold text-blue-500">Building the Future With Purpose and Integrity</h1><br />
          <p>
            "We believe construction is more than assembling materials. <br />
            It's about shaping the future with dedication and purpose. <br />
            Every project we build carries our commitment to excellence, <br />
            safety, and sustainability. From the first blueprint to the <br />
            final brick, we work with passion, precision, and integrity. <br />
            Our goal is simple — to build spaces that stand strong for <br />
            generations and stories that begin with you."
            <br />
            <br />
            <b className="text-blue-500">
              - Mr. Mohan Kumar Subedi <br />
              Founder, IDCD
            </b>
          </p>
        </div>
        <div className="sm:m-8 rounded-full bg-blue-300">
          <img src={image} alt="" className="" />
        </div>
      </div>
    );
}

export default Quote;