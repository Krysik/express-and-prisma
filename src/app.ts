import express from 'express';
import booksRouter from './routes/books';
import authorsRouter from './routes/authors';
import { config } from 'dotenv';
import { closeDbConnection } from './middlewares/prisma';

config();

const app = express();

app.use(express.json());
app.use(closeDbConnection);

app.get('/health-check', (req, res) => {
  let name = 'Marcin';
  res.status(200).json({ok: true, name})
})

const PORT = process?.env?.PORT || 4000;
app.use('/api/books', booksRouter);
app.use('/api/authors', authorsRouter);


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
