import { Router } from "express";
import controller from "./controller";

const login = Router();

login.post('/', controller.login);

export default login;