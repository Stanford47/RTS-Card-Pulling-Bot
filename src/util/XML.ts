import Card from "../Structs/Interfaces/Card";
import { XMLParser } from "fast-xml-parser";

export function parseToXML(cardIDArray: Array<Card>, pullID: number) {
    const xmlDataString: string = `
    <?xml version="1.0" encoding="utf-8" ?>
    <deck name="Card Pull #${pullID}">
    <main>
    <card id="${cardIDArray[0].ID}" passcode="${cardIDArray[0].Passcode}">${cardIDArray[0].Name}</card>
    <card id="${cardIDArray[1].ID}" passcode="${cardIDArray[1].Passcode}">${cardIDArray[1].Name}</card>
    <card id="${cardIDArray[2].ID}" passcode="${cardIDArray[2].Passcode}">${cardIDArray[2].Name}</card>
    <card id="${cardIDArray[3].ID}" passcode="${cardIDArray[3].Passcode}">${cardIDArray[3].Name}</card>
    <card id="${cardIDArray[4].ID}" passcode="${cardIDArray[4].Passcode}">${cardIDArray[4].Name}</card>
    <card id="${cardIDArray[5].ID}" passcode="${cardIDArray[5].Passcode}">${cardIDArray[5].Name}</card>
    <card id="${cardIDArray[6].ID}" passcode="${cardIDArray[6].Passcode}">${cardIDArray[6].Name}</card>
    <card id="${cardIDArray[7].ID}" passcode="${cardIDArray[7].Passcode}">${cardIDArray[7].Name}</card>
    </main>
    <side></side>
    <extra></extra>
    </deck>
    `;

    const parser = new XMLParser();

    return parser.parse(xmlDataString);
}