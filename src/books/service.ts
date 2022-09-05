import prisma from "../prisma";
import ErrorBase from "../utils/ErrorBase";

type Book = {
  id: string;
  name: string;
  autor: string;
  ano: number;
  descricao: string;
}

async function getAll() {
  const books = await prisma.books.findMany();
  if (!books) throw new Error("nenhum livro encontrado");
  return books;
}

async function getById(id: string) {
  const book = await prisma.books.findUnique({
    where: { id }
  });
  if (!book) throw new Error("nenhum livro encontrado");
  return book;
}

async function create(book: Book) {
  try {
    await prisma.books.create({
      data: book
    });
  } catch (err: unknown) {
    ErrorBase(500, "algo deu errado na criação");
  }
}

async function update(book: Book, id: string) {
  try {
    await prisma.books.update({
      data: book,
      where: { id }
    });
  } catch (err: unknown) {
    throw new Error("algo deu errado na edição");
  }
}

async function destroy(id: string) {
  try {
    await prisma.books.delete({
      where: { id }
    });
  } catch (err: unknown) {
    throw new Error("algo deu errado na deleção");
  }
}

export default {
  getAll,
  getById,
  create,
  update,
  destroy,
}