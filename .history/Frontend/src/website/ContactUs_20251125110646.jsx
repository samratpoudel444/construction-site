import logo from "./../assets/logo.png";
const ContactUs = () => {
  return (
    <div className="flex flex-row justify-between items-center px-16 text-lg bg-gray-200 border-t-gray-300 border-4">
      <div className="flex flex-row items-center">
        <img src={logo} alt="" className="w-32" />
        <h1>
          {" "}
          Indraakshi Divya Construction <br />& Development Pvt. Ltd.
        </h1>
      </div>
      <div className="flex flex-col items-center ">
        <a>Dhunibeshi-7,Dhading</a>
        <a>Email: indraakshidivya@gmail.com</a>
        <a>Contact no: 9851083127, 9841513195</a>
        <div>

        </div>

      </div>
    </div>
  );
  
};

export default ContactUs;
