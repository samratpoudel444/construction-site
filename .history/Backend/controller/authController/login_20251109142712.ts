import type{ Request, Response, NextFunction, RequestHandler } from "express";


const Login: RequestHandler = async(req:Request, res:Response, next:NextFunction)=>
{
    try{

    }
    catch(error)
    {
        return next({code:error.code|| 500, message:})
    }
}

export default Login;