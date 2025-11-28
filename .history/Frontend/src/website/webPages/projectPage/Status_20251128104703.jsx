
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

const Status= ()=>
{
    return (
      <div className="m-16">
        <div className="flex flex-row gap-16">
          <div>
            <a>Project status</a>
          </div>

          <div className="flex flex-row gap-4 border">
            {workStaus.map((value, index) => (
              <button key={index} className="">
                {value.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Status;