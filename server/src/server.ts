import express from 'express';
import routes from './routes';

// Create Express application
const app = express();

// Use JSON as default
app.use(express.json());

// Use routes
app.use(routes);

// Listening
app.listen(3333);