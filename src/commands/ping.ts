import { Interaction, SlashCommandBuilder } from 'discord.js'

const slashCommand = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!')

const run = async (interaction:Interaction) => {
    if(interaction.isChatInputCommand()){
        await interaction.reply('Pong!')
    }
}

export default {
    slashCommand,
    run
}