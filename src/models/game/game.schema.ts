import Mongoose from 'mongoose';
import { 
    createWithMaps,
    fetchChannelGames, 
} from './game.statics.js';

export const GameSchema = new Mongoose.Schema({
    channelID: String,
    title: String,
    maps: [{ 
        type: Mongoose.Schema.Types.ObjectId, 
        ref: 'maps' 
    }],
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

GameSchema.statics.fetchChannelGames = fetchChannelGames
GameSchema.statics.createWithMaps = createWithMaps

export default GameSchema
