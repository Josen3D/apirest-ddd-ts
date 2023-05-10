/**
 * Infraestructura Mongo
 */
import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.schema";

/**
 * MOCK
 */

const MOCK_USER = {
  name: "Antonio",
  description: "hola...",
  uuis: "000-000",
};
export class MockRepository implements UserRepository {
  async findUserById(uuid: string): Promise<any | null> {
    const user = MOCK_USER;
    return user;
  }
  async registerUser(userIn: UserEntity): Promise<any | null> {
    const user = MOCK_USER;
    return user;
  }
  async listUser(): Promise<any[] | null> {
    const users = [MOCK_USER, MOCK_USER, MOCK_USER];
    return users;
  }
}
