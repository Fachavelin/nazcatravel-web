import { db } from '@/database';
import { ITour } from '@/interfaces';
import { Tour } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = ITour | { msg: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getTourBySlug(req, res);
    default:
      return res.status(400).json({ msg: 'Metodo no existente' });
  }
}

async function getTourBySlug(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { slug } = req.query;

  console.log('slug de api', slug);

  await db.connect();

  const tour = await Tour.findOne({ slug }).lean();

  await db.disconnect();

  if (!tour) {
    return res.status(400).json({
      msg: 'Producto no encontrado',
    });
  }

  return res.status(200).json(tour);
}
