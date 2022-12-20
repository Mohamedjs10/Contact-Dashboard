import main from "../database/connection";
import { si_directors } from "../database/schema"; // Model => Sarwa

export default async function handler(req, res) {
  main().catch((err) => console.log(err));
  const member = new si_directors({
    name: { en: "Ahmed Khalifa", ar: "احمد خليفه" },
    position: { en: "Managing Director", ar: "العضو المنتدب " },
    imgUrl: "https://contact-clients-dev.s3.amazonaws.com/AhmedKhalifa.png",
  });
  member.save().then(() => {
    // adding
    res.status(200).json(member);
  });
  // Sarwa.find((err, data) => {
  //   if (err) return res.status(500).send(err);
  //   return res.status(200).json(data);
  // });
  //---------
  // Sarwa.find()
  //   .then((data) => {
  //     if (!data.length) res.status(404).send({ message: "Not found data" });
  //     else res.status(200).json(data);
  //   })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //   });
  //---------
  // try {
  //   // const result = await Sarwa.find({}).select([
  //   //   "data.sarwa_insurance.about_page.our_team",
  //   // ]);
  //   const result = await Sarwa.find({}, [
  //     "data.sarwa_insurance.about_page.our_team",
  //   ]);
  //   // console.log(JSON.stringify(result));
  //   if (!result.length) res.status(404).send({ message: "Not found data" });
  //   else res.status(200).json({ result });
  // } catch (err) {
  //   res.status(500).json({ error: "failed to load data 1 1 " });
  //   console.log(err);
  // }
  //---------
  try {
    // 1) deleting
    // const deleted = await Sarwa.deleteOne({ order: { $gte: 2 } });
    // console.log(deleted);
    // 2) updating
    // const updated = await Sarwa.updateOne({ order: 1 }, { $set: { order: 9 } });
    // console.log(updated);

    const result = await si_directors.find({});
    if (!result.length) res.status(404).send({ message: "Not found data" });
    else res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
    console.log(err);
  }
  //---------
  // try {
  //   const result = await Sarwa.updateMany(
  //     { order: { $gt: 2 } },
  //     { $inc: { order: 1 } }
  //   );

  //   console.log(result);
  //   if (!result.length) {
  //     res.status(404).send({ message: "Not found data" });
  //   } else {
  //     res.status(200).json({ result });
  //   }
  // } catch (err) {
  //   res.status(500).json({ error: "failed to load data" });
  //   console.log(err);
  // }
  //---------
  // Sarwa.updateMany(
  //   { order: { $gt: 1 } },
  //   { $inc: { order: 1 } },
  //   function (err, docs) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log("Updated Docs : ", docs);
  //     }
  //   }
  // );
}
