import { prisma } from "../server"
import { BadRequestError } from '../errors/errorApp';
import { State } from "@prisma/client";

const stateService = async ( { id, name }:State ) => {
    
    const alreadyExist = await prisma.state
        .findUnique({ where: { name }})

    if( alreadyExist ){
        throw new BadRequestError('O estado já foi salvo no banco, tente outro')
    }
        
    const state = await prisma.state.create({
        data: {
            id,
            name,
        }
    })
    .catch( (e) => {
        console.log(e);
        
        throw new BadRequestError('Não foi possível salvar o estado')
    })

    return state
}

export { stateService }