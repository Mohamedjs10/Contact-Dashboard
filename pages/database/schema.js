import mongoose from "mongoose";

const sarwaSchema = new mongoose.Schema({ name: String });
const sarwa = mongoose.model.Sarwa || mongoose.model("Sarwa", sarwaSchema);
console.log(`${mongoose.model.Sarwa}`);

export default sarwa;
