import image from "../assets/5.png"
const news = [
  {
    Image: image,
    Title: "hello k xa ho testing ho hae",
    Date: "2020-10-20",
  },
  {
    Image: image,
    Title: "hello k xa ho testing ho hae",
    Date: "2020-10-20",
  },
  {
    Image: image,
    Title: "hello k xa ho testing ho hae",
    Date: "2020-10-20",
  },
];

const NewsAndEvent= ()=>
{
    return (
      <div className="sm:p-32 p-4">
        <div className="border-l-4 border-l-blue-500 p-4 flex flex-row justify-between items-center">
          <h1 className="text-2xl font-semibold">News & Events</h1>
          <a href="" className="text-blue-500">
            View All News
          </a>
        </div>
        <div className="sm:mt-16 mt-8 sm:grid sm:grid-cols-3 items-center sm:gap-16 flex flex-col gap-4 w-full">
          {news.map((data, index) => (
            <div className="p-4 border rounded-2xl flex flex-col items-center transision hover:scale-110 duration-300 ">
              <img src={data.Image} alt="" />
              <h1>{data.Title}</h1>
              <a className="p-2 bg-blue-400 rounded-3xl">{data.Date}</a>
            </div>
          ))}
        </div>
      </div>
    );
}

export default NewsAndEvent;