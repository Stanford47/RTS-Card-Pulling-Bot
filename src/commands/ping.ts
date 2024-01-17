import { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("checks the ping of the bot"),

    async exec(interaction: ChatInputCommandInteraction) {
        await interaction.reply({ 
            ephemeral: true,
            embeds: [new EmbedBuilder()
                .setTitle("Pong!")
                .addFields(
                    { name: "Ping", value: `${interaction.client.ws.ping} ms` , inline: true },
                    { name: "Uptime", value: `${interaction.client.uptime/1000} s`, inline: true }
                )
            ]
         });
    }
}