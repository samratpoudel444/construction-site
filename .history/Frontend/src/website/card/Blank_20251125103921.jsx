const Blank= ({title, content})=>
{
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold text-center text-blue-500 ">{title}</h1>
            <p className="text-xl text-wrap">{content}</p>
        </div>
    )
}

export default Blank;