import main from "../../../database/connection";
import { sl_directors } from "../../../database/schema"; // Model

export default async function handler(req, res) {
  await main().catch((err) => console.log(err));
  // GET ============================================================================================
  if (req.method === "GET") {
    try {
      const result = await sl_directors.find({});
      if (!result.length) res.status(404).send({ message: "Not found data" });
      else {
        res.status(200).json(result);
      }
    } catch (err) {
      res.status(500).send({ error: "failed to load data" });
      console.log(err);
    }
    // POST ============================================================================================
  } else if (req.method === "POST") {
    // const body = JSON.parse(req.body);
    const body = {
      document: {
        name: { en: "a", ar: "a" },
        position: { en: "Managing Director", ar: "العضو المنتدب " },
        imgUrl: "https://contact-clients-dev.s3.amazonaws.com/AhmedKhalifa.png",
      },
    };
    const document = new sl_directors(body.document);
    const addedResult = await document.save();
    console.log(addedResult);
    res.send();
    // PUT ============================================================================================
  } else if (req.method === "PUT") {
    // const body = JSON.parse(req.body);
    const body = {
      id: "639ee8155a819317ec5297d4",
      document: {
        name: { en: "Ahmed Khalifa", ar: "احمد خليفه" },
        position: { en: "Managing Director", ar: "العضو المنتدب " },
        imgUrl: "https://contact-clients-dev.s3.amazonaws.com/AhmedKhalifa.png",
      },
    };
    const { name, position, imgUrl } = body.document;
    const updatedResult = await sl_directors.findByIdAndUpdate(
      { _id: body.id },
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
    // const body = JSON.parse(req.body);
    const body = {
      id: "639ee84f5a819317ec5297d8",
    };
    const deletedResult = await sl_directors.findByIdAndDelete({
      _id: body.id,
    });
    res.send();
  }
}
