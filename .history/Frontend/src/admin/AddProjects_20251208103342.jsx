import { useState } from "react";

const AddProjects = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    projectInterval: "",
    projectStatus: "",
    projectImage: null,
    projectDescription: "",
  });

   const handleChange = (e) => {
    const[name,value,type, file}= e.target;

   };

  const handleSubmit=()=>
  {

  }
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="h-24 bg-white shadow-sm flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-800">Add Projects</h1>
      </div>

      <div className="flex justify-center mt-12 px-4">
        <form
          className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-8 sm:p-12 flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          <div className="grid sm:grid-cols-3 gap-4 items-center">
            <label className="font-semibold text-gray-700">Project Name</label>
            <input
              type="text"
              value={formData.projectName}
              onChange={handleChange}
              className="sm:col-span-2 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter project name"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4 items-center">
            <label className="font-semibold text-gray-700">
              Project Interval
            </label>
            <input
              type="text"
              value={formData.projectInterval}
              onChange={handleChange}
              className="sm:col-span-2 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. Jan 2024 - May 2024"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4 items-center">
            <label className="font-semibold text-gray-700">
              Project Status
            </label>

            <div className="sm:col-span-2 flex gap-6">
              {["Completed", "Running", "Pending"].map((status) => (
                <label
                  key={status}
                  className="flex items-center gap-2 cursor-pointer text-gray-600"
                >
                  <input
                    type="radio"
                    name="projectStatus"
                    value={status}
                    checked={formData.projectStatus === status}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  {status}
                </label>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 items-center">
            <label className="font-semibold text-gray-700">Project Image</label>
            <input
              value={formData.projectImage}
              type="file"
              className="sm:col-span-2 border rounded-xl p-2 file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0 file:bg-blue-50
                         file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4 items-start">
            <label className="font-semibold text-gray-700">Description</label>
            <textarea
              value={formData.projectDescription}
              onChange={handleChange}
              rows="4"
              className="sm:col-span-2 border rounded-xl p-3 resize-none
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write about the project..."
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-10 py-3 rounded-xl
                         hover:bg-blue-700 transition font-semibold"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjects;
