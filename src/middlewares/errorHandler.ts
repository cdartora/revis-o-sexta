import { NextFunction, Request, Response } from "express";
import { ErrorWithStatus } from "../utils/ErrorBase";

export default function errorHandler(err: ErrorWithStatus, _req: Request, res: Response, _next: NextFunction) {
  console.log(err);

  res.status(err.status).send({ message: err.message })
}