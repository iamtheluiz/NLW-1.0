import express from 'express';
import path from 'path';
import routes from './routes';

// Create Express application
const app = express();

// Use JSON as default
app.use(express.json());

// Use routes
app.use(routes);

// Static images
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Listening
app.listen(3333);