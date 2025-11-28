const Logo= ({Image})=>
{
    return (
      <div className="flex justify-center items-center bg-[#C8C8C8] w-full h-full">
        <div className="rounded-full h-64 w-64 border-8 border-gray-200 bg-white">
          {Image}
        </div>
      </div>
    );
}

export default Logo;