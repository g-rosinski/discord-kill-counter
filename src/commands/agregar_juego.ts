import {  Interaction, SlashCommandBuilder } from 'discord.js'
import log from '../utils/log.js'
import { Game, GameModel } from '../models/game/index.js'

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
        const strmaps = interaction.options.getString('mapas')
        const maps = strmaps!.split(',')
                    .map(map => map.trim())
                    .filter(map => (map !== ''))
        const game: Game = {
            gameTitle: interaction.options.getString('juego')!,
            maps: maps,
            currentSeason: interaction.options.getString('temporada') || "1",
            guildID: interaction.guild?.id!
        }
        try{
            await GameModel.create(game)
            log.success(`Se agrego el juego ${game.gameTitle} al guild ${game.guildID}`)
            await interaction.editReply(`Se agrego el juego: ${game.gameTitle} a ${game.guildID}`)
        }catch(error){
            const msg = error instanceof Error && error.message 
            log.error(msg || `Error al agregar un juego ${game.gameTitle} al guild ${game.guildID}`)
        }
    }
}

export default {
    slashCommand,
    run
}