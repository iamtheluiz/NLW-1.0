import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

// Create Express application
const app = express();

app.use(cors());

// Use JSON as default
app.use(express.json());

// Use routes
app.use(routes);

// Static images
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

// Listening
app.listen(3333);