import { State } from "@prisma/client";
import { RequestHandler } from "express";
import { api } from "../api";
import { BadRequestError } from "../errors/ErrorApp";
import { IStateRequest } from "../interfaces/state";
import { stateService } from "../services/state.service";


const cityController: RequestHandler = async (req, res) => {
    const { state }: IStateRequest = req.body;

    const data = await api.get('')
    .catch( () => {
        throw new BadRequestError('Não foi realizar a consulta')
    })

    const states = data.data

    const names = states.geonames.map( (state: { geonameId: number; toponymName: string; }) => {
        let names: State

        names = { id: state.geonameId, name: state.toponymName }

        return names
    })    

    const i = names.findIndex( (data: State) => data.name === state)
    if( i > -1 ){
        const stateSaved = await stateService( names[i] )
        return res.status(201).json( stateSaved )
    }
      
    return res.status(400).json({ erro: 'O estado não existe, tente reescrever'})
}

export { cityController }