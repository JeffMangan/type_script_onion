import express from 'express';
import path from 'path';
import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from './infrastructure/api/UserController';
import { hostname } from 'os';

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with the specific origin(s) allowed to access your API
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/users', createUser);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${HOST}:${PORT}`);
});