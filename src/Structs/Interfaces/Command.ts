import { SlashCommandBuilder } from "discord.js";

export default interface Command {
    data: SlashCommandBuilder;
    devOnly?: boolean
    exec(...args: any):any;
}