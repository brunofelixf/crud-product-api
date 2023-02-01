import request  from "supertest";
import { server } from "../../src/server";

beforeEach( () => {
    server
})

afterEach( () => {
    server.close();
})

describe('Criar produtos | Route', () => {
    it('Deve criar um produto e retornar status 201', async () => {
        const data = {
            name: "Nome Teste",
            category: "Categoria Teste",
            status: "ACTIVE",
            quantity: 100, 
        }
        const response = await request(server)
        .post('/product')
        .send( data )
        .expect(201)
        expect( response.body ).toHaveProperty( 'id') 
        expect( response.body ).toMatchObject( data )
    })

    it('Não deve criar um produto se body estiver vazio e retornar status 400', async () => {
        await request(server)
        .post('/product')
        .send( {} )
        .expect(400)
    })
});

describe('Lista produtos | Route', () => {
    it('Deve retornar uma lista de produtos e retornar status 200', async () => {
        const response = await request(server)
        .get('/product')
        .expect(200)
        expect( response.body[0] ).toHaveProperty( 'id')
        // expect( response.body[0] ).toHaveProperty(
        //     expect.objectContaining({
        //         name: expect.any(String),
        //       }),
        // )
         
    })
});

