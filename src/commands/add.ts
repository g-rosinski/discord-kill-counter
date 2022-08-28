import {  Interaction, SlashCommandBuilder } from 'discord.js'

const slashCommand = new SlashCommandBuilder()
    .setName('add')
    .setDescription('Agregar un videojuego')
    .addStringOption(option =>
        option.setName('game')
            .setDescription('Juego que se va a agregar a la lista')
            .setRequired(true)
    )

const run = async (interaction: Interaction) =>  {
    if(interaction.isChatInputCommand()){
        const game = interaction.options.getString('game')
        await interaction.reply(`Se agrego el juego: ${game}`)
    }
}

export default {
    slashCommand,
    run
}