import type { NextApiRequest, NextApiResponse } from 'next'

interface Product {
  id: number
  name: string
  brand: String
  description: string
  price: number
}

type Data = {
  products: Product[],
  count: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
