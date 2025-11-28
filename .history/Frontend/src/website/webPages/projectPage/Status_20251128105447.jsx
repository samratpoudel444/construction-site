import { useState } from "react";

const workStaus = [
  {
    name: "List All",
  },
  {
    name: "Running",
  },
  {
    name: "Completed",
  },
];

const [selectedButton,setSelectedButton]= useState('listAll');

const Status= ()=>
{
    return (
      <div className="m-16">
        <div className="flex flex-row gap-16 items-center">
          <div>
            <a>Project status</a>
          </div>

          <div className="flex flex-row gap-2 border-b-2 border-b-gray-300">
            {workStaus.map((value, index) => (
              <button key={index} className="border p-1 hover:cursor-pointer rounded-xl">
                {value.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Status;