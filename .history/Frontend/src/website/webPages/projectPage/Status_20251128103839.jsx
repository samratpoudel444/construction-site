
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
                {workStaus.map((arr, index))}
            </div>
        </div>
    )
}