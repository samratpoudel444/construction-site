import { useState } from "react";

const LoginForm= ()=>
{
    const [formData,setFormData]= useState({
        email:"",
        password:""
    })

    const handleC


    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-16 rounded-2xl w-1/2 bg-gray-50">
          <div>
            Login
            <div>
              <label></label>
              <input type="text" />
            </div>
            <div>
              <label></label>
              <input type="text" />
            </div>
            <div>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default LoginForm;