
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
    return(
        <div className="m-16">
            <div className="flex flex-row justify-between">
                <a>Project status</a>
                {workStaus.map((value, index)=>
                (
                    <button key={index}>{value.name}</button>
                ))}
            </div>
        </div>
    )
}

export default Status;