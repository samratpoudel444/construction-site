import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { axiosInstance } from "../../utils/apiInstance";

const CreateEvent = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    eventName: "",
    eventImage: null,
    eventDescription: "",
  });

  const uploadData= async()=>
  {
    try{
      const response = await axiosInstance.post("/addEvent", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response
    }
    catch(err)
    {
      throw err.response
    }
  }

  const eventMutation = useMutation({
    mutationFn:uploadData,
    onSuccess: (response)=>
    {
        queryClient.invalidateQueries({queryKey:["Event"]})
        toast.success(response.data.message || "Event Inserted Sucessfully")
        setFormData({
          eventName: "",
          eventImage: null,
          eventDescription: "",
        });
    },
    onError:(err)=>
    {
        toast.error(err.data.message)
    }
  })

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   eventMutation.mutate(formData)
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
              disabled={eventMutation.isPending}
              className="w-full sm:w-auto bg-blue-600 text-white
                         px-10 py-3 rounded-xl font-semibold
                         hover:bg-blue-700 transition
                         disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
