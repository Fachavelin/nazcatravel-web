import { db } from '@/database';
import { IService } from '@/interfaces';
import { Service } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
  | {
      msg: string;
    }
  | IService[]
  | IService;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getServices(req, res);
  }
}
async function getServices(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { lang } = req.cookies;

  await db.connect();

  const services = await Service.aggregate([
    { $match: { isVisible: true, lang } }, // Add your conditions here
    {
      $project: {
        _id: 1,
        title: 1,
        description: 1,
        slug: 1,
        images: 1,
        price: 1,
      },
    },
  ]);

  await db.disconnect();

  return res.status(200).json(services);
}
