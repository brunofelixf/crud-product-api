import { IUpdateProduct } from '../interfaces/product';
import { RequestHandler } from "express";
import { updateProductService } from '../services/updateProduct.service';


const updateProductController: RequestHandler = async (req, res) => {
    const { name, category, status, quantity }: IUpdateProduct = req.body;
    const { id } = req.params;

    const data = { id, name, category, status, quantity }
    
    const product = await updateProductService( data )
    return res.json( product )
}

export { updateProductController }