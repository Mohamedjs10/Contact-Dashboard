// Next.js API route support: https://locahost/api

export default function handler(req, res) {
  const { pid } = req.query;

  res.status(200).json({ param: pid });
}
