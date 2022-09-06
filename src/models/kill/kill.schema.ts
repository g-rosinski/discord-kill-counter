import Mongoose from 'mongoose';
import { 
    createKill, 
    // findOneOrCreate 
} from './kill.statics.js';

export const KillSchema = new Mongoose.Schema({
    guildID: String,
    killer: String,
    dead: String,
    map: String,
    season: String,
    clip: {
        type: String,
        default: ""
    },
    created: {
        type: Date,
        default: new Date()
    },
    updated: {
        type: Date,
        default: new Date()
    }
})

KillSchema.statics.createKill = createKill
// KillSchema.statics.findOneOrCreate = findOneOrCreate

export default KillSchema
