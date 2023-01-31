import request  from "supertest";
import { server } from "../../src/server";

beforeEach( () => {
    server
})

afterEach( () => {
    server.close();
})

describe('Testa rota de produtos', () => {
    it('listar', async () => {
        await request(server).get('/product')
        .expect(200)
    })
});