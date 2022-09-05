import { User } from "../login/service"
import jwt from "jsonwebtoken";
import ErrorBase from "./ErrorBase";

const SECRET = "segredo";

function createToken(user: User) {
  const token = jwt.sign(user, SECRET, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });
  return token;
}

function decodeToken(token: string): User | void {
  try {
    const user = jwt.verify(token, SECRET);
    return user as User;
  } catch (err: unknown) {
    ErrorBase(400, "Token inválido")
  }
}

export {
  createToken,
  decodeToken,
}