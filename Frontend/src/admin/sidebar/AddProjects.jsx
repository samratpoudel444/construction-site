import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../utils/apiInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProjects = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    projectName: "",
    projectInterval: "",
    projectStatus: "",
    projectImage: null,
    projectDescription: "",
  });

  // Upload function
  const uploadData = async (data) => {
    const formPayload = new FormData();
    formPayload.append("projectName", data.projectName);
    formPayload.append("projectInterval", data.projectInterval);
    formPayload.append("projectStatus", data.projectStatus);
    formPayload.append("projectImage", data.projectImage);
    formPayload.append("projectDescription", data.projectDescription);

    try {
      const response = await axiosInstance.post("/addProject", formPayload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (err) {
      console.log("The error is", err.response?.data || err);
      throw err.response?.data || err;
    }
  };

  const addProjectMutation = useMutation({
    mutationFn: uploadData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project"] });
      toast.success("Project added successfully!");
      setFormData({
        projectName: "",
        projectInterval: "",
        projectStatus: "",
        projectImage: null,
        projectDescription: "",
      });
    },
    onError: (err) => toast.error(err?.message || "Something went wrong"),
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProjectMutation.mutate(formData);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="h-20 sm:h-24 bg-white shadow-sm flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Add Projects
        </h1>
      </div>

      <div className="flex justify-center mt-6 sm:mt-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-4 sm:p-8 md:p-12 flex flex-col gap-6 sm:gap-8"
        >
          {/* Project Name */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <label className="font-semibold text-gray-700">Project Name</label>
            <input
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="sm:col-span-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter project name"
            />
          </div>

          {/* Project Interval */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <label className="font-semibold text-gray-700">
              Project Interval
            </label>
            <input
              name="projectInterval"
              value={formData.projectInterval}
              onChange={handleChange}
              className="sm:col-span-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
              placeholder="Jan 2024 - May 2024"
            />
          </div>

          {/* Project Status */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <label className="font-semibold text-gray-700">
              Project Status
            </label>
            <div className="sm:col-span-2 flex flex-wrap gap-4">
              {["Completed", "Running", "Pending"].map((status) => (
                <label
                  key={status}
                  className="flex items-center gap-2 text-gray-600 cursor-pointer"
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

          {/* Project Image */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <label className="font-semibold text-gray-700">Project Image</label>
            <input
              type="file"
              name="projectImage"
              onChange={handleChange}
              className="sm:col-span-2 border rounded-xl p-2
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                         file:bg-blue-50 file:text-blue-700
                         hover:file:bg-blue-100"
            />
          </div>

          {/* Description */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <label className="font-semibold text-gray-700">Description</label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows="4"
              className="sm:col-span-2 border rounded-xl p-3 resize-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write about the project..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="
      w-full sm:w-auto
      bg-blue-600 text-white
      px-10 py-3
      rounded-xl font-semibold
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      active:bg-blue-800 active:shadow-inner
      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
      transition duration-200 ease-in-out
    "
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
