// import { Request, Response } from "express";
// import { createProductController } from "../../src/controllers/createProduct.controller";

// describe('Cria produto controller ',  () => {
    
//     const req = {
//         body: { 
//             name: "boneco",
//             category: "brinquedos",
//             status: "ACTIVE",
//             quantity: 100, 
//         }
//     } as Request

//     // const res = { status: jest.fn( (x) => x ), json: jest.fn( (x) => x) }
//     const res = { } as Response
//     const next = jest.fn()

//     it.skip('Deve retornar status 201', async () => {
        
//         createProductController(req, res, next)
        
//         expect(res.status).toBeCalledWith( 201 )
//     });
// });