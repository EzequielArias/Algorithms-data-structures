import request from 'supertest';
import app from '../src/app'
import { randomizer } from './mock/randomAuto'
import { Recipe } from '../src/interfaces';

describe('Queue routes', () => {

    let arr : Array<Recipe> = []
    const route = __dirname + '/mock/recipes.json'
    beforeAll(async () => {
        while (arr.length < 5) {
          let promise = Promise.all([randomizer(route)]);
    
          await promise.then((response) => {
            arr.push(response[0]);
          });
        }
      });

    it('Should add 5 recipes', async () => {
         
        for (let i = 0; i < arr.length; i++) {
            await request(app)
                .post('/Queue/enqueue')
                .send({data : arr[i]})
                .then((response) => {                    
                    expect(response)
                    expect(response.statusCode).toBe(201)
                })
                .catch((err) => console.log(err));
         }
    })

    it('return the peek of the Queue', async () => {
        await request(app)
                .get('/Queue/peek')
                .then((response) => {
                    expect(response.body.recipe).toBe('object')
                    expect(response.statusCode).toBe(200)
                })
    })
})
