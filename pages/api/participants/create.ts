// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method == 'POST') {
    console.log(req.body)
    prisma.participant.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        score: Number(req.body.score)
      }
    })
    res.status(200).json({ name: 'John Doe' })
  } else return res.status(405)
}
