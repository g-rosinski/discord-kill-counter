import { GameModel, Kill, KillModel } from "@models"
import log from '@utils/log/index.js'
import { URLRegex } from "@utils/regexValidations.js"
import { GuildMember, Interaction, SlashCommandBuilder } from "discord.js"

const slashCommand = new SlashCommandBuilder()
    .setName('kill')
    .setDescription('Contar la muerte de un jugador')
    .addMentionableOption(input => 
        input.setName('de')
        .setDescription('Usuario del malechor')
        .setRequired(true)
    )
    .addMentionableOption(input => 
        input.setName('a')
        .setDescription('Usuario del damnificado')
        .setRequired(true)
    )
    .addStringOption(input => input.setName('mapa')
            .setDescription('Mapa donde ocurrió la fechoria')
            .setRequired(true)
            .setAutocomplete(true)
    )
    .addStringOption(input => 
        input.setName('clip')
        .setDescription('Url del video clip de la muerte. Ej: https://www.twitch.tv/el_k1llah/clip/Benevo...')
        .setRequired(false)
    )

const run = async (interaction: Interaction) =>  {
    if(interaction.isAutocomplete()){
        const input = interaction.options.getFocused()
        await interaction.respond([
            {name: "Mapa 1", value: "mapa_1"},
            {name: "Mapa 2", value: "mapa_2"},
            {name: "Mapa 3", value: "mapa_3"},
        ])
    }
    if(interaction.isChatInputCommand()){
        await interaction.deferReply()
        const killer = interaction.options.getMentionable('de')
        const dead = interaction.options.getMentionable('a')
        const clip = interaction.options.getString('clip')
    
        const kill: Kill = {
            guildID: interaction.guild?.id!,
            killer: killer instanceof GuildMember ? killer.user.username : "",
            dead: dead instanceof GuildMember ? dead.user.username : "",
            map: interaction.options.getString('mapa')!,
            season: "temporada 3"
        }

        const regex = new RegExp(URLRegex)
        if(!!clip && clip.match(regex)){
            kill.clip = clip
        }

        try{
            await KillModel.create(kill)
            log.success(`Nueva kill registrada!`, kill)
            await interaction.editReply(`Nueva kill registrada de  ${kill.killer} a ${kill.dead} en ${kill.map}`)
        }catch(error){
            const msg = error instanceof Error && error.message 
            log.error(msg || `Error al registrar una kill`, kill)
        }
    }
}

export default {
    slashCommand,
    run
}