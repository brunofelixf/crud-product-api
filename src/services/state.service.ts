import { prisma } from "../server"
import { BadRequestError } from '../errors/ErrorApp';
import { State } from "@prisma/client";

const stateService = async ( { id, name }:State ) => {
    
    await prisma.state
        .findUniqueOrThrow({ where: { name }})
        .catch(()=>{ 
            throw new BadRequestError('O estado já foi salvo no banco, tente outro')
        })

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