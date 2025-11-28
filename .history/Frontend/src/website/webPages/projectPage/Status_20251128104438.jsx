
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
        <div>
            <div className="flex flex-">
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