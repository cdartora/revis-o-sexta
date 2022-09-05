import { Response, Request } from "express";
import service, { User } from "./service";

async function login(req: Request, res: Response) {
  const user = req.body;
  const token = await service.login(user as User);
  res.status(200).send({ token })
}

export default { login };