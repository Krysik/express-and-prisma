import express from 'express';
import prisma from '../services/prisma';

const router = express.Router();

router.get('', async (_req, res) => {
  try {
    const authors = await prisma.authors.findMany();
    res.status(200).json(authors);
  } catch (err) {
    res.json({ok: false, message: err.message})
  }
})

router.post('', async (req, res) => {
  const author = req.body.author;
  try {
    if (author) {
      const result = await prisma.authors.create({
        data: author,
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
    const author = req.body.author;
    const authorId = +req.params.id;
    const result = await prisma.authors.update({
      where: { id: authorId },
      data: author
    });
    res.status(200).json({ ok: true, result })
  } catch (err) {
    res.json({ ok: false, message: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const authorId = +req.params.id;
    const result = await prisma.authors.delete({
      where: { id: authorId }
    });
    res.status(200).json({ ok: true, result })
  } catch (err) {
    res.json({ ok: false, message: err.message })
  }
})



export default router;
