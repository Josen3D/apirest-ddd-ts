// import Request and Response from express
import { Request, Response } from "express";

import { UserUseCase } from "../../application/userUseCase";

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    // can use instead of use arrow function
    //this.insertCtrl = this.insertCtrl.bind(this);
  }

  public getCtrl = async ({ query }: Request, res: Response) => {
    const { uuid } = query;
    const user = await this.userUseCase.getDetailUser(`${uuid}`);
    res.send({ user });
  };

  public insertCtrl = async ({ body }: Request, res: Response) => {
    const user = await this.userUseCase.registerUser(body);
    res.send({ user });
  };
}
