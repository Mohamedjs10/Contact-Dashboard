// create the MongoDB connection
import mongoose from "mongoose";

// const main = async () => {
//   mongoose
//     .connect(
//       // connection string
//       "mongodb+srv://Mohamed:getItDone1A..@contact-sarwa-cluster.qy1z9si.mongodb.net/Contact-Sarwa-DB?retryWrites=true&w=majority"
//     )
//     .then(() => {
//       console.log("connected");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   console.log("DB connection established");
// };

const main = async () => {
  mongoose.connect(
    // connection string
    "mongodb://127.0.0.1:27017/Contact-Sarwa-DB",
    { useNewUrlParser: true }
    // () => {
    //   console.log("connected A");
    // }
  );

  mongoose.connection
    .once("open", () => {
      console.log("connected from localhost");
    })
    .on("error", (err) => {
      console.log(err);
    });
};
export default main;
