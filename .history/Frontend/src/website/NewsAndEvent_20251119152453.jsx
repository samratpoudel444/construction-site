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
      <div className="p-32">
        <div className="border-l-4 border-l-bl-500 p-4 flex flex-row justify-between items-center">
          <h1 className="text-2xl font-semibold">News & Events</h1>
          <a href="" className="text-green-500">
            View All News
          </a>
        </div>
      </div>
    );
}

export default NewsAndEvent;