import { prisma } from "../server"
import { BadRequestError, NotFoundError } from '../errors/errorApp';

const deleteProductService = async ( id: string ) => {

    await prisma.product
        .findUniqueOrThrow({ where: { id }})
        .catch( ()=>{ 
            throw new NotFoundError('Produto não encontrado')
        })
    
    
    await prisma.product
        .update({
            where: { id },
            data: {
                status: 'INACTIVE',
                deleted_at: new Date()
            }
        })    
    .catch( () => {
        throw new BadRequestError('Não foi possível deletar o produto')
    })    
}

export { deleteProductService }