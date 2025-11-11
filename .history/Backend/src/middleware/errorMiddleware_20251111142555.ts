import { ErrorRequestHandler, Request, Response, NextFunction } from "express"

const errMiddleware = (err: ErrorRequestHandler, req: Request, res, next) => {};