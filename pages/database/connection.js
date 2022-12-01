// create the MongoDB connection
import mongoose from "mongoose";

const main = async () => {
  mongoose
    .connect(
      "mongodb+srv://Mohamed:getItDone1A..@contact-sarwa.cconoga.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("DB connection established");
};

export default main;
