import type { NextApiRequest, NextApiResponse } from 'next';
import { ITour } from '@/interfaces/tour';

type Data = { msg: string } | ITour[];

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getTours(req, res);
  }
}

function getTours(req: NextApiRequest, res: NextApiResponse<Data>) {
  throw new Error('Function not implemented.');
}
