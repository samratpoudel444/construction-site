
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
            <div>
                {workStaus.map((value, index)=>
                (
                    <button key={index}>{value.name}</button>
                ))}
            </div>
        </div>
    )
}

exp