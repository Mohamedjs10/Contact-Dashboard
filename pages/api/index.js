import main from "../database/connection";
import Sarwa from "../database/schema"; // Model => Sarwa

import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  // enable CORS
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  main().catch((err) => console.log(err));
  try {
    const result = await Sarwa.find();
    if (!result.length) res.status(404).send({ message: "Not found data" });
    else res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
