import { ActionRowBuilder } from "@discordjs/builders";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
    .setName("bot")
    .setDescription("some operations to control the bot"),

    async exec(interaction: ChatInputCommandInteraction) {
        
    }

}