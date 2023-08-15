import type { NextApiRequest, NextApiResponse } from 'next';
import { ITour } from '@/interfaces/tour';
import { db } from '@/database';
import { Tour } from '@/models';

type Data =
  | {
      msg: string;
    }
  | ITour[];

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      getMostSoldProducts(req, res);
      break;

    default:
      return res.status(400).json({ msg: 'Metodo no existente' });
  }
}

const getMostSoldProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { lang } = req.cookies;

  await db.connect();
  const tours = await Tour.aggregate([
    { $match: { isVisible: true, lang } }, // Add your conditions here
    { $sample: { size: 3 } }, // Select 3 random documents
    {
      $project: {
        _id: 1,
        title: 1,
        shortDescription: 1,
        slug: 1,
        images: 1,
      },
    },
  ]);

  await db.disconnect();

  return res.status(200).json(tours);
};
