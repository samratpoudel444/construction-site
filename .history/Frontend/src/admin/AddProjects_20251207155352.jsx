const AddProjects = () => {
  return (
    <div className="">
      <div className="h-24 bg-gray-200 flex items-center justify-center">
        <h1 className="text-center text-3xl font-semibold ">Add Projects</h1>
      </div>

      <div className="flex justify-center items-center mt-16">
        <form action="" className="border rounded-2xl bg-gray-50 p-16 ">
          <div className="sm:flex sm:flex-row flex flex-col gap-4">
            <label>Project Name:</label>
            <input type="text" className="border rounded-2xl" placeholder="Enter project name" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjects;
