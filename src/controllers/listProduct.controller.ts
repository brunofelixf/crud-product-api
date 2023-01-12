import { IQueryProduct } from './../interfaces/product.d';
import { RequestHandler } from "express";
import { listProductService } from "../services/listProduct.service";


const listProductController: RequestHandler = async (req, res) => {
    const { id }: IQueryProduct = req.query;
    
    const product = await listProductService( id )
    return res.json( product )
}

export { listProductController }