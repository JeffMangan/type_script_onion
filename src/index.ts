import express from 'express';
import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from './infrastructure/api/UserController';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', createUser);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
