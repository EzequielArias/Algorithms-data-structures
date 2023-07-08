import request from 'supertest'
import  app  from '../src/app'
import { randomizer } from './mock/randomAuto'
import { DataType } from '../src/interfaces'

describe('LinkedList Routes', () => {
    let arr : DataType[] = []
    const route = __dirname + '/mock/autos.json'

    beforeAll( async () => {
        let count : number = 0;

        while (count < 5) {
            const random : DataType = await randomizer(route)
            arr.push(random)
            await request(app)
            .post(`http://localhost:8080/LinkedList/add`)
            .send(random)
        }
    })


    test('POST LinkedList/add', async () => {
        const random : DataType = await randomizer(route)

            await request(app)
            .post(`http://localhost:8080/LinkedList/add`)
            .send(random)
            .expect(201)
        
            await request(app)
            .get(`http://localhost:8080/LinkedList/search`)
            .query(random.car_name)
            .expect(random)  
    })

    test('Get /LinkedList/search,',  async () => {
        await request(app)
            .get(`http://localhost:8080/LinkedList/search`)
            .query(arr[0].car_name)
            .expect(arr[0])
            .expect(200)
    })

    test('Delete /LinkedList/remove', async () => {
        await request(app)
        .delete(`http://localhost:8080/LinkedList/remove`)
        .query(arr[1].car_name)
        .expect(200)

        await request(app)
            .get(`http://localhost:8080/LinkedList/search`)
            .expect(404)
            .expect('Sin coincidencias')
    })
})
