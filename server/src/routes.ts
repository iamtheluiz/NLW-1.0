import express from 'express';
import knex from './database/connection';

// Define routes
const routes = express.Router();

routes.get('/items', async (req, res) => {
  // Get items
  const items = await knex('items').select('*');

  // Format
  const serializedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`
    }
  })

  // Return
  return res.json(serializedItems);
});

routes.post('/points', async (req, res) => {
  // Get new point data
  const { name, email, whatsapp, latitude, longitude, city, uf, items } = req.body;

  // Transaction
  const trx = await knex.transaction();

  const insertedIds = await trx('points').insert({
    image: 'image-fake.jpg',
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf
  });

  const point_id = insertedIds[0];

  const pointItems = items.map((item_id: number) => {
    return {
      item_id,
      point_id
    };
  });

  await trx('point_items').insert(pointItems);

  return res.json({
    success: true
  });
});

export default routes;