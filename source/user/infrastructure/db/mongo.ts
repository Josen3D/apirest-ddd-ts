//import connect from mongoose
import { connect } from "mongoose";

const DB_URI = `${process.env.DB_URI}`;

// creates DB connection
const dbConnect = async () => {
  await connect(DB_URI);
  console.log("mongoDB connected");
};

export default dbConnect;
