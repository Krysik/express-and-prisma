import express from 'express';
import * as bodyParser from 'body-parser';
import booksRouter from 'routes/books';
import authorsRouter from 'routes/authors';
import { config } from 'dotenv';
import { closeDbConnection } from 'middlewares/prisma';

config();

const app = express();

app.use(bodyParser.json());
app.use(closeDbConnection);

const PORT = process?.env?.PORT || 4000;
app.use('/api/books', booksRouter);
app.use('/api/authors', authorsRouter);


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
