import {  channelMention, Interaction, SlashCommandBuilder } from 'discord.js'
import log from '@utils/log/index.js'
import { Game, GameModel } from '@models'
import { stringListToArray } from '@utils/parsers'
import { Map } from '@models/map'

const slashCommand = new SlashCommandBuilder()
    .setName('agregar-juego')
    .setDescription('Agregar un videojuego')
    .addStringOption(option =>
        option.setName('juego')
            .setDescription('Nombre del juego donde se van a registrar las muertes')
            .setRequired(true)
    )
    .addStringOption(option =>
        option.setName('mapas')
            .setDescription('Lista de mapas separados por coma(,). Ej: Shoreline, Street of tarkov, Custom')
            .setRequired(true)
    )
    .addStringOption(option =>
        option.setName('temporada')
            .setDescription('Lista de mapas separados por coma(,). Ej: Shoreline, Street of tarkov, Custom')
    )

const run = async (interaction: Interaction) =>  {
    if(interaction.isChatInputCommand()){
        await interaction.deferReply()
        const maps: Map[] = stringListToArray(interaction.options.getString('mapas')!).map((name):Map => ({name}))
        const game: Game = {
            title: interaction.options.getString('juego')!,
            maps: maps,
            currentSeason: interaction.options.getString('temporada') || "1",
            channelID: interaction.channelId
        }
        try{
            await GameModel.createWithMaps(game)
            log.success(`Se registro un nuevo juego!`, game)
            await interaction.editReply(`Se agrego el juego: ${game.title} al canal ${channelMention(game.channelID.toString())}`)
        }catch(error){
            const msg = error instanceof Error && error.message 
            log.error(msg || `Error al agregar un juego`, game)
        }
    }
}

export default {
    slashCommand,
    run
}