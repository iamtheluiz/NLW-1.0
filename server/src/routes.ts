import express, { Request, Response } from 'express';

// Define routes
const routes = express.Router();

routes.get('/', (req, res): Response<{ message: string }> => {
  return res.json({
    message: 'Hello World'
  });
});

export default routes;