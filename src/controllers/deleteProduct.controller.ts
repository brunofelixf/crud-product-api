import { IParamProduct } from './../interfaces/product.d';
import { RequestHandler } from "express";
import { deleteProductService } from '../services/deleteProduct.service';

const deleteProductController: RequestHandler = async (req, res) => {
    const { id } : IParamProduct = req.params;

    await deleteProductService( id );
    return res.status(204).send()
}

export { deleteProductController }