import { connect, disconnect } from "@utils/database.js"
import log from '@utils/log/index.js'
import { Kill, KillModel, KillDocument } from "./index.js"

export const createKill = async (game:Kill) => {
    // try{
    //     connect()
    //     await GameModel.create(game)
    //     log.success(`Se agrego el juego ${game.gameTitle} al guild ${game.guildID}`)
    //     disconnect()
    // }catch(error){
    //     const msg = error instanceof Error && error.message 
    //     log.error(msg || `Error al agregar un juego ${game.gameTitle} al guild ${game.guildID}`)
    // }
}

// export async function findOneOrCreate(id: string): Promise<GameDocument> {
//     const record = await GameModel.findOne({ id });
//     if (record) {
//       return record;
//     } else {
//       return GameModel.create({ id });
//     }
// }