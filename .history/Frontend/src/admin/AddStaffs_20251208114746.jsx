import { useState } from "react";

const AddStaffs = () => {
  const [formData, setFormData] = useState({
    staffName: "",
    staffImage: null,
    staffRole: "",
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
    console.log(formData);
    window.alert("event Added");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 ">
      {/* Header */}
      <div className="h-20 sm:h-24 bg-white shadow-sm flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Create News and Event
        </h1>
      </div>

      {/* Form */}
      <div className="flex justify-center mt-6 sm:mt-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white rounded-2xl shadow-md
                     p-4 sm:p-8 md:p-12 flex flex-col gap-6 sm:gap-8"
        >
          {/* Project Name */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <label className="font-semibold text-gray-700">Event Name</label>
            <input
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              className="sm:col-span-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter news or event name"
            />
          </div>

          {/* Project Image */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <label className="font-semibold text-gray-700">Event Image</label>
            <input
              type="file"
              name="eventImage"
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
            <label className="font-semibold text-gray-700">
              Event Description
            </label>
            <textarea
              name="eventDescription"
              value={formData.eventDescription}
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
              className="w-full sm:w-auto bg-blue-600 text-white
                         px-10 py-3 rounded-xl font-semibold
                         hover:bg-blue-700 transition"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStaffs;
