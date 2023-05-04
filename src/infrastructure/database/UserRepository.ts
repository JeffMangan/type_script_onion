import { User } from '../../core/domain/User';
import { IUserRepository } from '../../core/ports/IUserRepository';

export class UserRepository implements IUserRepository {
  // This should be replaced with actual database interaction logic using an ORM like TypeORM or Sequelize.
  private mockDb: User[] = [];

  async addUser(user: User): Promise<User> {
    user.id = this.mockDb.length + 1;
    this.mockDb.push(user);
    return user;
  }

  async getUserById(id: number): Promise<User | null> {
    return this.mockDb.find((user) => user.id === id) || null;
  }

  async updateUser(user: User): Promise<User> {
    const index = this.mockDb.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.mockDb[index] = user;
      return user;
    }
    throw new Error('User not found');
  }

  async deleteUser(id: number): Promise<boolean> {
    const index = this.mockDb.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.mockDb.splice(index, 1);
      return true;
    }
    return false;
  }
}
