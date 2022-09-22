import { Model, Document } from "mongoose"

export interface Map {
    name: String,
    created?: Date
    updated?: Date
}

export interface MapDocument extends Map, Document {}
export interface MapModelWithMethods extends Model<MapDocument> {
    findByMatch: (name:string, limit?: number) => Promise<Array<MapDocument>>
}