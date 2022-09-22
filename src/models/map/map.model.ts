import Mongoose from "mongoose";
import { MapDocument, MapSchema, MapModelWithMethods } from "./index";

export const MapModel = Mongoose.model<MapDocument, MapModelWithMethods>("maps", MapSchema)