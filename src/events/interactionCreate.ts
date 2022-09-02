import { Interaction } from 'discord.js'
import { ClientWithCommands } from '../types/types.js'
import log from '@utils/log.js'

const interactionCreate = (client: ClientWithCommands) => async (interaction: Interaction) => {
    try{
        if (!interaction.isChatInputCommand()){
            throw Error('No es un comando valido')
        }
        const username = interaction.member?.user.username ?? ''
        const command = client.commands.get(interaction.commandName) 
        log.info(`Usuario ${username} ejecuto el comando: /${interaction.commandName}`)
        await command.run(interaction)
        
    }catch(error) {
        const message = error instanceof Error ? error.message : 'Error desconocido'
        log.error(message)
    }
}

export default interactionCreate