const Logo= ({Image})=>
{
    return(
        <div className="flex justify-center items-center bg-gray-300 w-full h-full">
            <div className="rounded-full h-64 w-64 border-8 border-gray-0">

                    {Image}
                
            </div>
        </div>
    )
}

export default Logo;