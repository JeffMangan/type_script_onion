import { User } from '../domain/User';
import { IUserRepository } from '../ports/IUserRepository';

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async createUser(firstName: string, lastName: string, email: string): Promise<User> {
    const user = new User(0, firstName, lastName, email);
    return await this.userRepository.addUser(user);
  }

  async getUserById(id: number): Promise<User | null> {
    return await this.userRepository.getUserById(id);
  }

  async updateUser(user: User): Promise<User> {
    return await this.userRepository.updateUser(user);
  }

  async deleteUser(id: number): Promise<boolean> {
    return await this.userRepository.deleteUser(id);
  }
}
