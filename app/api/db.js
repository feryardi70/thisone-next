import mongoose from "mongoose";
//require(dotenv).config();
//import { dotenv, configDotenv } from "dotenv";

const dbConnect = async () => {
  try {
    //await mongoose.connect("mongodb://127.0.0.1:27017/dbdellmongo");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (error) {
    console.log(error.message);
  }
};
//mongoose.connect("mongodb://127.0.0.1:27017/dbdellmongo");

export default dbConnect;
