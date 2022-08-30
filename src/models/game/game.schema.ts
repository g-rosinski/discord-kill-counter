import Mongoose from 'mongoose';
import { 
    createGame, 
    // findOneOrCreate 
} from './game.statics.js';

export const GameSchema = new Mongoose.Schema({

    guildID: String,
    gameTitle: String,
    maps: Array<String>,
    currentSeason: String,
    created: {
        type: Date,
        default: new Date()
    },
    updated: {
        type: Date,
        default: new Date()
    }
})

GameSchema.statics.createGame = createGame
// GameSchema.statics.findOneOrCreate = findOneOrCreate

export default GameSchema
