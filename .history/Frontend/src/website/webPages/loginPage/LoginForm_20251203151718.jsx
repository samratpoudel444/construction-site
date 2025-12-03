import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <div className="mt-16 flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 ">
        <form className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Login
          </h1>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
