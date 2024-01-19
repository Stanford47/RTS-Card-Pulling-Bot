import { ActionRowBuilder } from "@discordjs/builders";
import { ChatInputCommandInteraction, SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
    .setName("bot")
    .setDescription("some operations to control the bot"),

    async exec(interaction: ChatInputCommandInteraction) {
        const selectMenu = new StringSelectMenuBuilder()
        .setCustomId("botSettings")
        .setPlaceholder("choose an operation")
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel("Restart")
            .setDescription("restarts the bot")
            .setValue("restart")
        );

        const interactionReply = await interaction.reply({ 
            components: [new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(selectMenu)],
            ephemeral: true,
            
        });
    }

}