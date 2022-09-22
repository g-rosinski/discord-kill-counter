import Mongoose from "mongoose";
import { findByMatch } from "./map.statics";

export const MapSchema = new Mongoose.Schema({
    name: String,
    created: {
        type: Date,
        default: new Date()
    },
    updated: {
        type: Date,
        default: new Date()
    }
})

MapSchema.statics.findByMatch = findByMatch

export default MapSchema