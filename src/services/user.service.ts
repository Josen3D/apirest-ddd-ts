// import user interface
import { User } from "../interfaces/user.interface";
// import user model
import UserModel from "../models/user.Schema";

/**
 * Registrar un usuario
 * @param user
 * @returns
 */
const registerUser = async (user: User) => {
  const response = UserModel.create(user);
  return response;
};

/**
 * Obtener un usuario
 * @param email
 * @returns
 */
const getDetailUser = async (email: string) => {
  const response = UserModel.findOne({ email });
  return response;
};

export { registerUser, getDetailUser };
