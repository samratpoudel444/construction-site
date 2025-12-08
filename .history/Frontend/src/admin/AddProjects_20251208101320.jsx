import { useState } from "react";

const AddProjects = () => {
    const[formData, setFormData]= useState({
        projectName:"",
        projectInterval:"",
        projectStatus:"",
        projectImage:null,
        projectDescription:"",
        projectCertificate:""
    })

    const handleChange= (e)=>
    {

    }

    const handleSubmit= ()=>
    [

    ]

  return (
    <div className="">
      <div className="h-24 bg-gray-200 flex items-center justify-center">
        <h1 className="text-center text-3xl font-semibold ">Add Projects</h1>
      </div>

      <div className="flex justify-center items-center mt-16">
        <form
          onSubmit={handleSubmit}
          className=" rounded-2xl bg-gray-50 p-16 flex flex-col gap-8 "
        >
          <div className="sm:flex sm:flex-row flex flex-col gap-4 sm:items-center text-lg">
            <label className="font-bold">Project Name:</label>
            <input
              type="text"
              className="border rounded-2xl p-2"
              placeholder="Enter project name"
              name="projectName"
            />
          </div>

          <div className="sm:flex sm:flex-row flex flex-col gap-4 sm:items-center text-lg">
            <label className="font-bold">Project Interval:</label>
            <input
              type="text"
              className="border rounded-2xl p-2"
              placeholder="Enter Project Interval"
              name="projectInterval"
            />
          </div>

          <div className="sm:flex sm:flex-row flex flex-col gap-4 sm:items-center text-lg">
            <label className="font-bold">Project Status:</label>

            <div className="flex flex-row gap-2">
    
              
              <label className="flex">
                <input type="radio" name="projectStatus" value="Running" />
                <a>Running</a>
              </label>

              <label className="flex">
                <input type="radio" name="projectStatus" value="Pending" />
                <a>Pending</a>
              </label>
            </div>
          </div>

          <div className="sm:flex sm:flex-row flex flex-col gap-4 sm:items-center text-lg">
            <label className="font-bold">Project Name:</label>
            <input
              type="text"
              className="border rounded-2xl p-2"
              placeholder="Enter project name"
              name="projectName"
            />
          </div>

          <div className="sm:flex sm:flex-row flex flex-col gap-4 sm:items-center text-lg">
            <label className="font-bold">Project Name:</label>
            <input
              type="text"
              className="border rounded-2xl p-2"
              placeholder="Enter project name"
              name="projectName"
            />
          </div>

          <div className="sm:flex sm:flex-row flex flex-col gap-4 justify-center items-center text-lg">
            <button className="p-2 rounded-2xl bg-blue-300 w-64 hover:bg-blue-400 text-white">
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjects;
