// import model and Schema from mongoose
import { Schema, model } from "mongoose";

//creates the Schema
const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//saves the model to export
const UserModel = model("users", UserSchema);

//export the model
export default UserModel;
