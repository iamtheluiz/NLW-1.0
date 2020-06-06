import express from 'express';

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
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;