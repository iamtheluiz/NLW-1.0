import express, { Request, Response } from 'express';

// Create Express application
const app = express();

// Use JSON as default
app.use(express.json());

// Set user interface
interface User {
  name: string,
  email: string
};

// User list
let users: User[] = [];

app.get('/users', (req: Request, res: Response): Response<User[]> => {
  // Get filter option
  const search = String(req.query.search);

  // Get users
  const filteredUsers = search ? users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())) : users;

  // Return user list
  return res.json(filteredUsers);
});

app.get('/users/:id', (req: Request, res: Response): Response<User> => {
  // Get user index
  const id = Number(req.params.id);

  // Return user
  return res.json(users[id]);
});

app.post('/users', (req: Request, res: Response): Response<User> => {
  // Get user info
  const { name, email } = req.body;

  // Create new user
  let user: User = {
    name,
    email
  };

  // Add new user
  users[users.length] = user;

  // Return user info
  return res.json(user);
});

// Listening
app.listen(3333);