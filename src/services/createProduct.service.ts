import { ICreateProduct } from './../interfaces/product.d';
import { prisma } from "../server"


const createProductService = async ({
    name,
    category,
    status,
    quantity
}: ICreateProduct) => {    

    const product = await prisma.product.create({
        data: {
            name,
            category,
            status,
            quantity
        }
    })
    .catch( (e) => {
        console.log(e);
        
        throw new Error('Não foi possível criar o produto')
    })

    return product
}

export { createProductService }