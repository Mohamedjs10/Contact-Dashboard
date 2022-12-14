import main from "../../database/connection";
import Sarwa from "../../database/schema"; // Model => Sarwa

export default async function handler(req, res) {
  main().catch((err) => console.log(err));

  if (req.method === "GET") {
    try {
      // var test = await JSON.parse(
      //   '{ "data": { "sarwa_insurance": { "about_page": 1 } } }'
      // );
      // console.log(test.data.sarwa_insurance.about_page);

      // const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
      // const json = JSON.stringify(obj);
      // console.log(obj, json, "DB:", result[0]);
      // console.log(typeof obj, typeof json, "DB:", typeof result);
      const result = await Sarwa.find({}, ["data.sarwa_insurance.about_page"]);

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
