import { Model, Document } from "mongoose";

export interface Game {
    guildID: String,
    gameTitle: String,
    maps: Array<String>,
    currentSeason: String,
    created?: Date,
    updated?: Date
}

export interface GameDocument extends Game, Document {}
export interface GameModelWithMethods extends Model<GameDocument> {
    createGame: (game: Game) => void,
    findOneOrCreate: (id: string) => Promise<GameDocument>
}