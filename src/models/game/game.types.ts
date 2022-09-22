import { Map, MapDocument } from "@models/map";
import { Model, Document } from "mongoose";

export interface Game {
    channelID: String,
    title: String,
    maps: Array<Map> | Array<MapDocument>,
    currentSeason: String,
    created?: Date,
    updated?: Date
}

export interface GameDocument extends Game, Document {}
export interface GameModelWithMethods extends Model<GameDocument> {
    fetchChannelGames: (channelID: string) => Promise<Array<GameDocument>>,
    createWithMaps: (game: Game) => void,
}