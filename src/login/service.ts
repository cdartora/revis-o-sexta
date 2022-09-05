import prisma from "../prisma";
import ErrorBase from "../utils/ErrorBase";
import { createToken } from "../utils/token";

export type User = {
  id: string;
  username: string;
  password: string;
  email: string;
}

async function login(user: User) {
  const userFound = await prisma.user.findFirst({
    where: user
  });

  if (!userFound) ErrorBase(404, "Credenciais incorretas");

  const token = createToken(user);

  return token;
}

export default { login };