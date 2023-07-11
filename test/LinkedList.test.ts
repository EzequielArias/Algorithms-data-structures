import request from 'supertest';
import app from '../src/app';
import { randomizer } from './mock/randomAuto';
import { DataType } from '../src/interfaces';
import { response } from 'express';

describe('LinkedList Routes', () => {
  let arr: DataType[] = [];
  const route = __dirname + '/mock/autos.json';

  beforeAll(async () => {
    while (arr.length < 5) {
      let promise = Promise.all([randomizer(route)]);

      await promise.then((response) => {
        arr.push(response[0]);
      });
    }
  });

  test('POST LinkedList/add', async () => {
    for (let i = 0; i < arr.length; i++) {
      await request(app)
        .post('/LinkedList/add')
        .send({ data: arr[i] })
        .then((response) => {
          expect(response.statusCode).toBe(201);
        })
        .catch((err) => console.log(err));
    }
  });

  test('Get /LinkedList/search,', async () => {
    await request(app)
      .get(`/LinkedList/search`)
      .query({ str: arr[0].car_name })
      .then((response) => {
        expect(response.body.data).toEqual(arr[0]);
        expect(response.statusCode).toBe(200);
      });
  });

  test('Delete /LinkedList/remove', async () => {
    await request(app)
      .delete(`/LinkedList/remove`)
      .query({ str: arr[1].car_name })
      .expect(200);

    await request(app)
      .get(`/LinkedList/search`)
      .query({ str: arr[1].car_name })
      .expect(404)
      .expect('Sin coincidencias');
  });
});
