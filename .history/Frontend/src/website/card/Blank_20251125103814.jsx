const Blank= ({title, content})=>
{
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Blank;