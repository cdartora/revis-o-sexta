import express, { Request, Response } from 'express';
import 'express-async-errors';
import books from './books/route';
import errorHandler from './middlewares/errorHandler';
import login from './login/route';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/books', books);
app.use('/login', login);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Api rodando na porta ${PORT}`);
})