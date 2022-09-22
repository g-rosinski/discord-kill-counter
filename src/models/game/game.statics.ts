import { MapModel } from '@models/map/map.model.js'
import log from '@utils/log/index.js'
import { GameModel, GameDocument, Game } from "./index.js"

export const fetchChannelGames = async (channelID: string): Promise<Array<GameDocument>> => {
    let games: Array<GameDocument> = []
    try{
        games = await GameModel.find({ channelID })
    }catch(error){
        const msg = error instanceof Error && error.message 
        log.error(msg || `Error al hacer Games::fetchChannelGames`, {channelID})
    }
    return games
}

export const createWithMaps = async (game: Game): Promise<GameDocument> => {
    try{
        game.maps = await MapModel.create(game.maps)
        return GameModel.create(game)
    }catch(error){
        const msg = error instanceof Error && error.message 
        log.error(msg || `Error al hacer Games::createWithMaps`, game)
        throw error
    }
}

// export async function findOneOrCreate(id: string): Promise<GameDocument> {
//     const record = await GameModel.findOne({ id });
//     if (record) {
//       return record;
//     } else {
//       return GameModel.create({ id });
//     }
// }