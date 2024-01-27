import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
    .setName("Database")
    .setDescription("database settings")
    .addSubcommand(subcommand => subcommand
        .setName("list_tables")
        .setDescription("lists all tables in the database")),

    async exec(interaction: ChatInputCommandInteraction) {
        if(interaction.options.getSubcommand() === "list_tables") {
            
        }
    }
}