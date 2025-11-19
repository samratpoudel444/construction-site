import logo from "./../assets/logo.png";
const ContactUs = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <img src={logo} alt="" className="w-32" />
        <h1>
          {" "}
          Indraakshi Divya Construction <br />& Development Pvt. Ltd.
        </h1>
      </div>
      <div className="flex flex-col items-start px-32">
        <a>Dhunibeshi-7,Dhading</a>
        <a>email:indraakshidivya@gmail.com</a>
        <a>Contact no:9851083127, 9841513195</a>

      </div>
    </div>
  );
  
};

export default Footer;
