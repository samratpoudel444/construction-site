import image from "../../../assets/project.png";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
import LoginForm from "./LoginForm";


const LoginForm = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <div>
        {" "}
        <NavBar />
      </div>
      <div>
        <img src={image} alt="" className="mt-8 border-b-gray-500 border-b-2" />
      </div>
      <div>
        <LoginForm />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
