import { prisma } from "../server"
import { NotFoundError } from '../errors/ErrorApp';

const listProductService = async ( id: string | undefined ) => {
    
    const product = await prisma.product.findMany({
        where: { id }
    })    
    
    if( product.length === 0 ){
        throw new NotFoundError('O produto não foi encontrado')
    }  

    return product
}

export { listProductService }