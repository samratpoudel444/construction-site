import img2 from "../assets/2.jpeg";
const AboutUs= ()=>
{
    return (
      <div className="flex flex-row sm:p-16 items-center justify-between gap-8">
        <div className="w-1/2">
          <div>
            <h1>Who we are</h1>
          </div>
          <div>
            <p className="text-leading">
              Indraakshi Divya Construction & Development Pvt. Ltd. is a
              dedicated private construction company in Nepal, established and
              led by our Founder and Managing Director, Mr. Mohan Kumar Subedi.
              Founded with a clear vision to deliver dependable, high-quality
              construction services, the company has grown steadily under his
              strong leadership and commitment to excellence. Since its
              establishment, the company has been focused on maintaining
              professionalism, transparency, and timely project execution.
              Guided by Mr. Subedi’s experience and strategic direction,
              Indraakshi Divya Construction & Development Pvt. Ltd. continues to
              strengthen its capabilities while upholding values of integrity,
              innovation, and sustainable development. Today, the company is
              actively engaged in a range of private infrastructure development
              works, including buildings, roads and highways, bridges,
              irrigation, water supply, and environmental management projects.
              With an expanding technical team and growing operational capacity,
              Indraakshi Divya Construction & Development Pvt. Ltd. continues to
              contribute to Nepal’s infrastructure sector while creating
              employment opportunities and delivering long-lasting value to
              clients and communities.
            </p>
          </div>
        </div>
        <div className="sm:w-1/2">
          <img src={img2} alt="" />
        </div>
      </div>
    );
}

export default AboutUs;
