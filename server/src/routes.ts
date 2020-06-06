import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

// Define routes
const routes = express.Router();

// Define controllers
const pointsController = new PointsController();
const itemsController = new ItemsController();

// Routes
routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);

export default routes;