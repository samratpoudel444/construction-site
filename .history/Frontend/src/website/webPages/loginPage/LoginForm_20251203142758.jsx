import { useState } from "react";

const LoginForm= ()=>
{
    const [formData,setFormData]= useState({
        email:"",
        password:""
    })

    const handleChange= ()=>
    {

    }
    const handleSubmit= ()=>
    {

    }


    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-16 rounded-2xl w-1/2 bg-gray-50">
          <div>
            Login
            <div>
              <label>Email</label>
              <input type="text" placeholder="Email" className="p-2"/>
            </div>
            <div>
              <label>Password</label>
              <input type="text" placeholder="Password" className="p-2" />
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