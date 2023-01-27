import { prisma } from "../server"
import { BadRequestError, NotFoundError } from '../errors/errorApp';
import { Product } from '@prisma/client';

const updateProductService = async ({
    id,
    name,
    category,
    status,
    quantity
}: Partial<Product>) => {
    
    const product = await prisma.product
        .findUniqueOrThrow({ where: { id } })    
        .catch( ()=>{ 
            throw new NotFoundError('Produto não encontrado')
        })
    
    const productUpdated = await prisma.product
        .update({
            where: { id },
            data: {
                name: name ?? product.name,
                category: category ?? product.category,
                status: status ?? product.status,
                quantity: quantity ?? product.quantity
            }
        })
    .catch( () => {
        throw new BadRequestError('Não foi possível criar a produto')
    })    

    return productUpdated
}

export { updateProductService }