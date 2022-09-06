import { Client, GatewayIntentBits, Collection } from 'discord.js';
import {
    commandHandler,
    eventHandler
} from '@handlers'
import { ClientWithCommands } from './types/types.js';
import { CONFIG } from '@constants/config.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] }) as ClientWithCommands;
client.commands = new Collection();

commandHandler(client);
eventHandler(client)

client.login(CONFIG.BOT_TOKEN);

export default client