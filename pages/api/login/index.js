// pages/api/post/index.ts

import { getSession } from 'next-auth/client';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { email, password } = req.body;

  const session = await getSession({ req });
  const result = await prisma.post.create({
    data: {
      name:name,
      email: email,
      password: password,
    },
  });
  res.json(result);
}