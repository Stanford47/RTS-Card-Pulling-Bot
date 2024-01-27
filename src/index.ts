import { Client } from "discord.js";
import { config } from "dotenv";
import { Sequelize } from "sequelize";

config(); // for dotenv

import SQLClient from "./Structs/PostgreSQLClient";
export const sequelizeClient = new SQLClient(new Sequelize(process.env.PSQL_DB_NAME, process.env.PSQL_USR, process.env.PSQL_PSWD, { host: process.env.PSQL_HOST, dialect: "postgres"}));

import Bot from "./Structs/Bot";
export const client = new Bot(new Client({ intents: 4096 }), process.env.DSCRD_API_TOKEN as string, process.env.DSCRD_APP_ID as string);