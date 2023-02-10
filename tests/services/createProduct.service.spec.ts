import { ICreateProduct } from "../../src/interfaces/product";
import { server } from "../../src/server";
import { createProductService } from "../../src/services/createProduct.service";





describe('Cria produto service ',  () => {

    beforeEach( () => {
        server
    })    

    afterEach( () => {
        server.close();
    })
    
    const data = {
            name: "Nome Teste",
            category: "Categoria Teste",
            status: "ACTIVE",
            quantity: 100, 
    } as ICreateProduct

    it('Deve retornar status 201', async () => {
        
        const result = await createProductService(data)
        expect(result).toHaveProperty( 'id' )
    });
});