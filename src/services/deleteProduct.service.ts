import { prisma } from "../server"
import { BadRequestError, NotFoundError } from '../errors/ErrorApp';

const deleteProductService = async ( id: string ) => {

    await prisma.product
        .findUniqueOrThrow({ where: { id }})
        .catch( ()=>{ 
            throw new NotFoundError('Produto não encontrado')
        })
    
    
    await prisma.product
        .delete({
            where: { id }
        })    
    .catch( () => {
        throw new BadRequestError('Não foi possível deletar o produto')
    })    
}

export { deleteProductService }