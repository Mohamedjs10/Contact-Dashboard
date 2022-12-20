import main from "../../../database/connection";
import { si_teams } from "../../../database/schema"; // Model

export default async function handler(req, res) {
  await main().catch((err) => console.log(err));
  // GET ============================================================================================
  if (req.method === "GET") {
    if (req.query._id) {
      try {
        const result = await si_teams.findById(req.query._id);
        console.log(result);
        if (!result) res.status(404).send({ message: "Not found dataaaa" });
        else {
          return res.status(200).json(result);
        }
      } catch (err) {
        console.error(err);
        return res.status(500).send({ error: "failed to load dataaaa" });
      }
    }

    try {
      const result = await si_teams.find({});
      if (!result.length) res.status(404).send({ message: "Not found data" });
      else {
        res.status(200).json(result);
      }
    } catch (err) {
      res.status(500).send({ error: "failed to load data" });
    }
    // POST ============================================================================================
  } else if (req.method === "POST") {
    const body = JSON.parse(req.body);
    const document = new si_teams(body.document);
    const addedResult = await document.save();
    res.send();
    // PUT ============================================================================================
  } else if (req.method === "PUT") {
    const body = JSON.parse(req.body);
    const { name, position, imgUrl } = body.document;
    const updatedResult = await si_teams.findByIdAndUpdate(
      { _id: body._id },
      {
        $set: {
          "name.en": name.en,
          "name.ar": name.ar,
          "position.en": position.en,
          "position.ar": position.ar,
          imgUrl: imgUrl,
        },
      }
    );
    res.send();
    // DELETE ============================================================================================
  } else if (req.method === "DELETE") {
    const body = JSON.parse(req.body);
    const deletedResult = await si_teams.findByIdAndDelete({
      _id: body._id,
    });
    res.send();
  }
}
