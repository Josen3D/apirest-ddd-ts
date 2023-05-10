// import config dotenv
import "dotenv/config";
//import express
import express from "express";
//import cors
import cors from "cors";
// import user routes
import userRoutes from "./routes/user.route";
import dbConnect from "./db/mongo";

//creates the express app
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(userRoutes);

//put servet to listen
app.listen(PORT, () => console.log("Server running on port:", PORT));
//DB connection
dbConnect();
