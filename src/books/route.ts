import Router from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import controller from './controller';

const books = Router();

books.get('/', authMiddleware, controller.getAll);
books.get('/:id', authMiddleware, controller.getById);
books.post('/', authMiddleware, controller.create);
books.put('/:id', authMiddleware, controller.update);
books.delete('/:id', authMiddleware, controller.destroy);

export default books;