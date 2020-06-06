import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async create(req: Request, res: Response) {
    // Get new point data
    const { name, email, whatsapp, latitude, longitude, city, uf, items } = req.body;

    // Transaction
    const trx = await knex.transaction();

    const point = {
      image: 'image-fake.jpg',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    }

    const insertedIds = await trx('points').insert(point);

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id
      };
    });

    await trx('point_items').insert(pointItems);

    return res.json({
      id: point_id,
      ...point
    });
  }
}

export default PointsController;