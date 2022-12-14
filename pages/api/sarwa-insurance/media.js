import main from "../../database/connection";
import Sarwa from "../../database/schema"; // Model => Sarwa

export default async function handler(req, res) {
  main().catch((err) => console.log(err));

  if (req.method === "GET") {
    try {
      const result = await Sarwa.find({}, ["data.sarwa_insurance.media_page"]);

      if (!result.length) res.status(404).send({ message: "Not found data" });
      else {
        res.status(200).json(result[0]);
      }
    } catch (err) {
      res.status(500).send({ error: "failed to load data" });
      console.log(err);
    }
  } else if (req.method === "POST") {
  }
}
