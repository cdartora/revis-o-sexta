import { Request, Response } from "express";
import service from "./service";

async function getAll(req: Request, res: Response) {
  const books = await service.getAll();
  res.status(200).send(books);
}

async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const book = await service.getById(id);
  res.status(200).send(book);
}

async function create(req: Request, res: Response) {
  const { body } = req;
  await service.create(body);
  res.status(201).send({ message: "Criado com sucesso!" });
}

async function update(req: Request, res: Response) {
  const { body } = req;
  const { id } = req.params;
  await service.update(body, id);
  res.status(200).send({ message: "Atualizado com sucesso!" });
}

async function destroy(req: Request, res: Response) {
  const { id } = req.params;
  await service.destroy(id);
  res.status(200).send({ message: "Deletado com sucesso!" });
}

export default {
  getAll,
  getById,
  create,
  update,
  destroy,
}