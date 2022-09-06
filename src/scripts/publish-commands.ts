import { REST, Routes } from 'discord.js';
import * as commands from '@commands'
import log from '@utils/log/index.js'
import { CONFIG } from '@constants/config';

export const publishCommands = async () => {
    try {
        const rest = new REST({ version: '10' }).setToken(CONFIG.BOT_TOKEN);
        const commandList = Object.values(commands).map(command => command.slashCommand);
        log.info('Actualizando (/) comandos de la app...');

        await rest.put(Routes.applicationCommands(CONFIG.APP_ID!), { 
          body: commandList 
        });
        commandList.forEach((command => log.success(`Comando '/${command.name}' cargado` )));
        
        log.info('Comandos de la app actualizados!');
      } catch (error: any) {
        log.error(error);
      }
}

publishCommands()