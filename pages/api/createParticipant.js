import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  console.log('handler');
  console.log(res);
  const { name, email, score } = req.body;
  const result = await prisma.participants.create({
    data: {
      name: name,
      email: email,
      score: score,
    },
  });
  console.log('result', result);
  res.json(result);
}
