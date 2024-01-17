import { Client } from "discord.js";
import { config } from "dotenv";

config(); // for dotenv

// since this is just the barebones code to get the bot to work, there is no error checking yet
import Bot from "./Structs/Bot";

export const client = new Bot(new Client({ intents: 1003 }), process.env.DSCRD_API_TOKEN, process.env.DSCRD_APP_ID);