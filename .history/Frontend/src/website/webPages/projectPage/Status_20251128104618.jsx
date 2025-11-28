
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
            <div className="flex flex-row gap-8">
                <div></div>
                <a>Project status</a>
                {workStaus.map((value, index)=>
                (
                    <button key={index} className="">{value.name}</button>
                ))}
            </div>
        </div>
    )
}

export default Status;