import log from '@utils/log/index.js'
import { Interaction } from 'discord.js'
import { ClientWithCommands } from '../types/types.js'

const interactionCreate = (client: ClientWithCommands) => async (interaction: Interaction) => {
    try{
        const username = interaction.member?.user.username ?? ''
        if (interaction.isChatInputCommand() || interaction.isAutocomplete()){
            const command = client.commands.get(interaction.commandName) 
            log.debug(`Interaction del usuario ${username} con el comando: /${interaction.commandName}`)
            await command.run(interaction)
        }
        
    }catch(error) {
        const message = error instanceof Error ? error.message : 'Error desconocido'
        log.error(message)
    }
}

export default interactionCreate