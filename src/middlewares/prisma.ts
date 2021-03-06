import { Request, Response, NextFunction } from 'express';
import prisma from '../services/prisma';

function closeDbConnection(_req: Request, res: Response, next: NextFunction) {
  res.on('finish', async () =>  {
    console.log('closing db connection');
    await prisma.$disconnect()
  });
  next();
}

export {
  closeDbConnection
}
