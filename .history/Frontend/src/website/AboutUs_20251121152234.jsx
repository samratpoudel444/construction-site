import img2 from "../assets/2.jpeg";
const AboutUs= ()=>
{
    return (
      <div className="flex flex-row sm:p-16 p-4 items-center justify-between gap-8 border-b-4 border-b-gray-300">
        <div className="smw-1/2">
          <div className="border-l-4 border-l-blue-500 p-4">
            <h1 className="text-2xl font-bold text-blue-500">Who we are</h1>
          </div>
          <div className="mt-4 sm:p-0 p-8">
            <p className="max-w-f">
              Indraakshi Divya Construction & Development Pvt. Ltd. is a
              dedicated private construction company in Nepal, established and
              led by our Founder and Managing Director, Mr. Mohan Kumar Subedi.
              Founded with a clear vision to deliver dependable, high-quality
              construction services, the company has grown steadily under his
              strong leadership and commitment to excellence. <br /> <br />
              Since its establishment, the company has been focused on
              maintaining professionalism, transparency, and timely project
              execution. Guided by Mr. Subedi’s experience and strategic
              direction, Indraakshi Divya Construction & Development Pvt. Ltd.
              continues to strengthen its capabilities while upholding values of
              integrity, innovation, and sustainable development. <br /> <br />
              
            </p>
          </div>
        </div>
        <div className="sm:w-1/2">
          <img
            src={img2}
            alt="IDCD image"
            className="sm:border-2 sm:flex hidden"
          />
        </div>
      </div>
    );
}

export default AboutUs;
