import { Router } from "express";
import { createProductController } from "../controllers/createProduct.controller";
import { listProductController } from "../controllers/listProduct.controller";
import { updateProductController } from "../controllers/updateProduct.controller";
import { validatorDataMiddleware } from "../middlewares/dataValidator";
import { createProductSchema } from "../validations/createProduct.schema";
import { updateProductSchema } from "../validations/updateProduct.schema";


const routerApp = Router()

routerApp.post('/product', validatorDataMiddleware(createProductSchema), createProductController);
routerApp.patch('/product/:id', validatorDataMiddleware(updateProductSchema), updateProductController);
routerApp.get('/product', listProductController);


export { routerApp }