const Logo= ({Image})=>
{
    return (
      <div className="flex justify-center items-center bg-[#DCDCDC] w-full h-full">
        <div className="rounded-full h-64 w-64 border-8 border-gray-200 bg-white flex ite">
          <h1 className="">{Image}</h1>
        </div>
      </div>
    );
}

export default Logo;