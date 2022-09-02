import { Client, GatewayIntentBits, Collection } from 'discord.js';
import {
    commandHandler,
    eventHandler
} from '@handlers'
import dotenv from 'dotenv'
import { ClientWithCommands } from './types/types.js';

dotenv.config()
const client = new Client({ intents: [GatewayIntentBits.Guilds] }) as ClientWithCommands;
client.commands = new Collection();

commandHandler(client);
eventHandler(client)

client.login(process.env.BOT_TOKEN);