import { Client } from "discord.js";

export interface ClientWithCommands extends Client{
    commands: any
}