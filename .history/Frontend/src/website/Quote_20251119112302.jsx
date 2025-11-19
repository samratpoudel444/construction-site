import image from "../assets/5.png"
const Quote= ()=>
{
    return (
      <div className="bg-gray-300 sm:px-32 sm:py-16 sm:flex sm:flex-row flex flex-col-reverse justify-between items-center">
        <div>
          <p>
            "At our construction company, we don’t just build structures <br />
            —we build trust, strength, and a future you can rely on. <br />
            Every project we take on reflects our commitment to quality <br />
            and honest craftsmanship. We believe that a foundation made with
            integrity stands the test of time. With every brick laid and every
            plan executed, we aim to turn your vision into a lasting reality.
            Your dreams shape our work, and your satisfaction defines our
            success."
          </p>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    );
}

export default Quote;