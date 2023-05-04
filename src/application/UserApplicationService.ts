import { UserService } from '../core/services/UserService';
import { User } from '../core/domain/User';



export class UserApplicationService {
  constructor(private userService: UserService) {}

  async createUser(firstName: string, lastName: string, email: string) {
    return await this.userService.createUser(firstName, lastName, email);
  }

  async getUserById(id: number) {
    return await this.userService.getUserById(id);
  }

  async updateUser(user: User) {
    return await this.userService.updateUser(user);
  }

  async deleteUser(id: number) {
    return await this.userService.deleteUser(id);
  }
}

