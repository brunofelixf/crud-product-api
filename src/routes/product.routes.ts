import { Router } from "express";
import { createProductController } from "../controllers/createProduct.controller";


const routerApp = Router()

routerApp.post('/product', createProductController)


export { routerApp }