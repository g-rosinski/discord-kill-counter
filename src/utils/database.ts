import { DB_CONNECTION } from "../constants/db.js";
import Mongoose from "mongoose";
import log from "./log.js";

let database: Mongoose.Connection

export const connect = () => {
    
    if(database) return;

    Mongoose.connect(DB_CONNECTION)

    database = Mongoose.connection

    database.once("open", async () => {
        log.success("Connected to database");
    });  

    database.on("error", () => {
        log.error("Error connecting to database");
    });
}

export const disconnect = () => !!database && Mongoose.disconnect();