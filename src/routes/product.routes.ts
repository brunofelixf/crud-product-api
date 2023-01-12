import { Router } from "express";
import { createProductController } from "../controllers/createProduct.controller";
import { validatorDataMiddleware } from "../middlewares/dataValidator";
import { productSchema } from "../validations/product.schema";


const routerApp = Router()

routerApp.post('/product', validatorDataMiddleware(productSchema), createProductController)


export { routerApp }