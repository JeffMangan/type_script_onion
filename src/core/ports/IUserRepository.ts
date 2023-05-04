import { User } from '../domain/User';

export interface IUserRepository {
  addUser(user: User): Promise<User>;
  getUserById(id: number): Promise<User | null>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: number): Promise<boolean>;
}
