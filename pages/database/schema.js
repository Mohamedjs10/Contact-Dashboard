import mongoose from "mongoose";

const sarwaSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  order: Number,
});
const sarwa = mongoose.models.Sarwa || mongoose.model("Sarwa", sarwaSchema);
console.log(`${mongoose.model.Sarwa}`);

export default sarwa;
