import { articlesList } from '../../../data'

export default function handler(req, res) {
  const { query: { id } } = req;
  const article = articlesList.find(item => item.id === id) || null;
  res.status(200).json({ data: article })
}