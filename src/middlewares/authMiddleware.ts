import { NextFunction, Response, Request } from "express";
import { User } from "../login/service";
import prisma from "../prisma";
import ErrorBase from "../utils/ErrorBase";
import { decodeToken } from "../utils/token";

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) ErrorBase(400, "Token não encontrado");

  const user = decodeToken(authorization as string);

  const userFound = await prisma.user.findFirst({
    where: user as User
  });

  next();
}

export default authMiddleware;