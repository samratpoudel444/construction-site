import logo from "./../assets/1.webp";
const Footer = () => {
  return (
    <div className="sm:p-8 p-4 flex flex-col">
      <div className="flex flex-row justify-center items-center">
        <img src={logo} alt="" className="w-32" />
        <h1>
          {" "}
          Indraakshi Divya Construction <br />& Development Pvt. Ltd.
        </h1>
      </div>
      <div>
        <a>Dhunibeshi-7,Dhading</a>
        <a>email:indraakshidivya@gmail.com</a>
        <a>Contact no:9851083127, 9841513195</a>
      </div>
    </div>
  );
  
};

export default Footer;
