import Mongoose from 'mongoose';
import { KillDocument, KillSchema, KillModelWithMethods } from './index.js';

export const KillModel = Mongoose.model<KillDocument, KillModelWithMethods>("kills", KillSchema);
