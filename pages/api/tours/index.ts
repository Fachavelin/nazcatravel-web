import type { NextApiRequest, NextApiResponse } from 'next';
import { ITour } from '@/interfaces/tour';
import { db } from '@/database';
import { Tour } from '@/models';

type Data = { msg: string } | ITour[];

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getTours(req, res);
  }
}

async function getTours(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { lang } = req.cookies;

  await db.connect();
  const tours = await Tour.aggregate([
    { $match: { isVisible: true, lang } }, // Add your conditions here
    {
      $project: {
        _id: 1,
        title: 1,
        shortDescription: 1,
        slug: 1,
        images: 1,
        price: 1,
      },
    },
  ]);

  await db.disconnect();

  return res.status(200).json(tours);
}
