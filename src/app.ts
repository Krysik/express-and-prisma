import express from 'express';
import * as bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv';
config();

const app = express();
const prisma = new PrismaClient();
app.use(bodyParser.json());

const PORT = process?.env?.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
