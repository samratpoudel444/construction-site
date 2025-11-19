import logo from "./../assets/logo.png";
const Footer = () => {
  return (
    <div className="sm:p-16 p-4 flex flex-col">
      <div className="flex flex-row justify-center ite">
        <img src={logo} alt="" className="w-32" />
        <h1>
          {" "}
          Indraakshi Divya Construction <br />& Development Pvt. Ltd.
        </h1>
      </div>
      <div></div>
    </div>
  );
  
};

export default Footer;
