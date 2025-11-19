import logo from "./../assets/logo.png";
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
        <a>email:indraakshidivya@gm</a>
        <a>Dhunibeshi-7,Dhading</a>
        <a>Dhunibeshi-7,Dhading</a>
      </div>
    </div>
  );
  
};

export default Footer;
