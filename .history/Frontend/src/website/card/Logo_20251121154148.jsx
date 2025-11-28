const Logo= ({Image})=>
{
    return(
        <div className="flex justify-center items-center bg-gray-300 w-full h-full">
            <div className="rounded-full h-16 w-16 border-8">

                    {Image}
                
            </div>
        </div>
    )
}

export default Logo;