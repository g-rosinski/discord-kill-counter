import { Model, Document } from "mongoose";

export interface Kill {
    guildID: String,
    killer: String,
    dead: String,
    map: String,
    season: String,
    created?: Date,
    updated?: Date
}

export interface KillDocument extends Kill, Document {}
export interface KillModelWithMethods extends Model<KillDocument> {
    createKill: (kill: Kill) => void,
    findOneOrCreate: (id: string) => Promise<KillDocument>
}