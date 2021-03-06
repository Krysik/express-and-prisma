import express from 'express';
import prisma from '../services/prisma';

const router = express.Router();

router.get('', async (_req, res) => {
  try {
    const books = await prisma.books.findMany({ include: { author: true } });
    res.status(200).json(books);
  } catch (err) {
    res.json({ok: false, message: err.message})
  }
});

router.post('', async (req, res) => {
  const book = req.body.book;
  try {
    if (book) {
      const result = await prisma.books.create({
        data: book,
        include: {
          author: false
        }
      })
      res.status(201).json(result);
    } else {
      res.status(400).send('Bad request parameters');
    }
  } catch (err) {
    res.json({ ok: false, message: err.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const book = req.body.book;
    const bookId = +req.params.id;
    const result = await prisma.books.update({
      where: { id: bookId },
      data: book
    });
    res.status(200).json({ ok: true, result })
  } catch (err) {
    res.json({ok: false, message: err.message})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const bookId = +req.params.id;
    const result = await prisma.books.delete({
      where: { id: bookId }
    });
    res.status(200).json({ ok: true, result })
  } catch (err) {
    res.json({ ok: false, message: err.message })
  }
})

export default router;
