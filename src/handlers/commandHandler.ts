import * as commands from '../commands/index.js'
import { ClientWithCommands } from '../types/types.js';

/**
 * Bindea los commandos a la collection de client.commands 
 * @param {*} client 
 */
const commandHandler = (client: ClientWithCommands) => {
    const commandList = Object.values(commands);

    commandList.forEach(command => {
        client.commands.set(command.slashCommand.name, command)
    });
}

export default commandHandler