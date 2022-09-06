import { DB_CONNECTION } from "@constants/db.js";
import Mongoose from "mongoose";
import log from "./log/index";

let database: Mongoose.Connection

export const connect = () => {
    
    if(database) return;

    Mongoose.connect(DB_CONNECTION)

    database = Mongoose.connection

    database.once("open", async () => {
        log.success("Conectado a la base de datos");
    });  

    database.on("error", () => {
        log.error("Error al querer conectar a la base de datos");
    });
}

export const disconnect = () => {
    if(database){
        Mongoose.disconnect()
        log.info("Base de datos desconectada");
    }
};