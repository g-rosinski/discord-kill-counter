import { REST, Routes } from 'discord.js';
import * as commands from '@commands'
import dotenv from 'dotenv'
import log from '@utils/log.js'

dotenv.config()

export const publishCommands = async () => {
    try {
        const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN!);
        const commandList = Object.values(commands).map(command => command.slashCommand);
        log.info('Actualizando (/) comandos de la app...');

        await rest.put(Routes.applicationCommands(process.env.APP_ID!), { 
          body: commandList 
        });
        commandList.forEach((command => log.success(`Comando '/${command.name}' cargado` )));
        
        log.info('Comandos de la app actualizados!');
      } catch (error: any) {
        log.error(error);
      }
}

publishCommands()