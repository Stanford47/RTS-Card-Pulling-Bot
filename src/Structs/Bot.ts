import { ApplicationCommandDataResolvable, ChatInputCommandInteraction, Client, Collection, Events, Interaction, REST, Routes } from "discord.js";
import { config } from "dotenv";
import { readdirSync } from "fs";
import { join } from "path";
import Command from "./Interfaces/Command";

export default class Bot {
    public commands: Array<ApplicationCommandDataResolvable> = new Array<ApplicationCommandDataResolvable>;
    public commandsMap: Collection<string, Command> =  new Collection<string, Command>;

    public constructor(public readonly client: Client, private readonly botToken: string, private readonly appID: string) {
        this.registerSlashCommands();

        this.client.login(this.botToken);

        this.client.on("ready", () => {
            console.log("The bot has successfully logged in");
        });

        this.onInteractionCreate();
    }

    private async registerSlashCommands() {
        const rest = new REST({ version: "9" }).setToken(this.botToken);
        const commandFiles = readdirSync(join(__dirname, "..", "commands")).filter(file => !file.endsWith(".map"));

        for(const file of commandFiles) {
            const command = await import(join(__dirname, "..", "commands", file));

            this.commands.push(command.default.data);
            this.commandsMap.set(command.default.data.name, command.default);
        }

        await rest.put(Routes.applicationCommands(this.appID), { body: this.commands });
    }

    private async onInteractionCreate() {
        this.client.on(Events.InteractionCreate, async (interaction: Interaction ): Promise<any> => {
            if(!interaction.isChatInputCommand()) return;

            const command = this.commandsMap.get(interaction.commandName);

            if(!command) return;

            try {
                //if()
                command.exec(interaction as ChatInputCommandInteraction);
            } catch(err: any) {
                console.error(err);
            }
        });
    }
}