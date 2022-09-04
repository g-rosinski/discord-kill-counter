import Mongoose from 'mongoose';
import { GameDocument, GameSchema, GameModelWithMethods } from './index.js';

export const GameModel = Mongoose.model<GameDocument, GameModelWithMethods>("games", GameSchema);
