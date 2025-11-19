import image from "../assets/5.png"
const Quote= ()=>
{
    return (
      <div className="bg-gray-300 sm:px-32  sm:flex sm:flex-row flex flex-col-reverse justify-between items-center font-extralight text-2xl">
        <div className="">
          <p>
            "At our construction company, we don’t just build structures <br />
            —we build trust, strength, and a future you can rely on. <br />
            Every project we take on reflects our commitment to quality <br />
            and honest craftsmanship. We believe that a foundation made <br />
            with integrity stands the test of time. With every brick laid and{" "}
            <br />
            every plan executed, we aim to turn your vision into a lasting{" "}
            <br />
            reality. Your dreams shape our work, and your satisfaction <br />{" "}
            defines our success."<br />
            <br />
            <b></b>
            
          </p>
        </div>
        <div className="border">
          <img src={image} alt="" className="h-1/2" />
        </div>
      </div>
    );
}

export default Quote;