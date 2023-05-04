import { Request, Response } from 'express';
import { User } from '../../core/domain/User';
import { UserService } from '../../core/services/UserService';
import { UserRepository } from '../database/UserRepository';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export async function createUser(req: Request, res: Response) {
  const { firstName, lastName, email } = req.body;
  const user = await userService.createUser(firstName, lastName, email);
  res.json(user);
}

export async function getUserById(req: Request, res: Response) {
  const userId = parseInt(req.params.id);
  const user = await userService.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
}

export async function updateUser(req: Request, res: Response) {
  const userId = parseInt(req.params.id);
  const { firstName, lastName, email } = req.body;
  const user = await userService.updateUser(new User(userId, firstName, lastName, email));
  res.json(user);
}

export async function deleteUser(req: Request, res: Response) {
  const userId = parseInt(req.params.id);
  const result = await userService.deleteUser(userId);
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
}
