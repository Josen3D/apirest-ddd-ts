// import Request and Response from express
import { Request, Response } from "express";
// import user services
import { registerUser, getDetailUser } from "../services/user.service";

const getUser = async ({ query }: Request, res: Response) => {
  const { email } = query;
  const user = await getDetailUser(`${email}`);
  res.send({ user });
};

const insertUser = async ({ body }: Request, res: Response) => {
  const user = await registerUser(body);
  res.send({ user });
};

export { getUser, insertUser };
