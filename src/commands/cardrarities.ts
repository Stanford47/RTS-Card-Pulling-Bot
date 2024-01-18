import Card from "../Structs/Interfaces/Card";
import { parseToXML } from "../util/XML";

import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
    .setName("cardrarities")
    .setDescription("test the card rarities (yummy stats)"),

    exec(interaction: ChatInputCommandInteraction) {
        let cards: Array<Card> = new Array<Card>;
        cards = [
            {ID: 1323, Name: "h"},
            {ID: 4213, Name: "aaa"},
            {ID: 5333, Name: "four"},
            {ID: 8103, Name: "p"},
        ];

        let x = parseToXML(cards, 0);
        //console.log(x.deck.main.card);

        interaction.reply({
            
            content: "yellow chat",
            ephemeral: true
        });
    }
}