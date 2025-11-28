import { useState } from "react";

const workStaus = [
  {
    name: "ListAll",
  },
  {
    name: "Running",
  },
  {
    name: "Completed",
  },
];



const Status= ()=>
{
    const [selectedButton, setSelectedButton] = useState("ListAll");
    return (
      <div className="sm:m-16 m-4">
        <div className="sm:flex sm:flex-row sm:gap-16 items-center flex flex-col gap-4">
          <div>
            <a>Project status</a>
          </div>

          <div className="flex flex-row gap-2">
            {workStaus.map((value, index) => (
              <button
                key={index}
                onClick={(setSelectedButton ())}
                className={`border p-1 hover:cursor-pointer rounded-xl bg-gray-50 ${selectedButton === value.name ?"bg-blue-500 border-blue-500":"" }`}
              >
                {value.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Status;