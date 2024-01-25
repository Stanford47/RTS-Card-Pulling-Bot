import { QueryTypes, Sequelize } from "sequelize";
import Card from "./Interfaces/Card";

export default class SQLClient {
    public constructor(public readonly sequelizeClient: Sequelize) {
        try {
            this.auth();

            console.log("Successfully connected to Database!");
        } catch(err) {
            console.log("There has been an Error with connecting to the Database:\t", err);
        }
    }

    public async auth() {
        await this.sequelizeClient.authenticate();
    }

    public async createTable() {};

    public async getAllTableContents(tableName: string): Promise<Array<Object>> {
        return this.sequelizeClient.query(`SELECT * FROM ${tableName}`, { type: QueryTypes.SELECT });
    };

    public async deleteTable() {};

    public async addData() {
        
    }
}