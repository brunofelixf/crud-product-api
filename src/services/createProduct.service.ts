import { ICreateProduct } from './../interfaces/product.d';
import { prisma } from "../server"
import { BadRequestError } from '../errors/ErrorApp';

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
        throw new BadRequestError('Não foi possível criar a postagem')
    })

    return product
}

export { createProductService }