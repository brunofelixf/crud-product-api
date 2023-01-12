import { ICreateProduct } from './../interfaces/product.d';
import { RequestHandler } from "express";
import { createProductService } from "../services/createProduct.service";


const createProductController: RequestHandler = async (req, res) => {
    const data: ICreateProduct = req.body;

    const product = await createProductService( data )
    return res.status(201).json( product )
}

export { createProductController }