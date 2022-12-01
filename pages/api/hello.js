import main from "../database/connection";
import Sarwa from "../database/schema";

export default function handler(req, res) {
  main().catch((err) => console.log(err));
  const create = new Sarwa({ name: "Ali Shaheen" });
  create.save().then(() => {
    res.status(200).json(create);
  });
}
